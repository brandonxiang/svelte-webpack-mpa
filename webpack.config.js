const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const path = require('path');
const globby = require('globby');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

function getEntries() {
  try {
    const entries = {};
    const allEntry = globby.sync('src/pages/**/main.js');
    allEntry.forEach(entry => {
      const res = entry.match(/src\/pages\/(\w+)\/main\.js/);
      if (res.length) {
        entries[res[1]] = `./${entry}`;
      }
    });
    return entries;
  } catch (error) {
    console.error('File structure is incorrect for MPA');
  }
}

function multiHtmlPlugin(entries) {
  const pageNames = Object.keys(entries);
  return pageNames.map(name => {
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: './public/index.html',
      chunks: [name],
      minify: prod
        ? {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
          }
        : true,
    });
  });
}

const babelLoader = {
  loader: 'babel-loader',
};

module.exports = function(env) {
  const entry = getEntries();

  const htmlPlugins = multiHtmlPlugin(entry);

  const config = {
    entry,
    resolve: {
      extensions: ['.mjs', '.js', '.svelte'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].[id].js',
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'svelte-loader',
              options: {
                emitCss: true,
                hotReload: true,
                preprocess: require('svelte-preprocess')({
                  postcss: true,
                }),
              },
            },
          ],
        },
        {
          test: /\.js$/,
          use: [babelLoader],
          exclude: /node_modules\/(?!svelte)/,
        },
        {
          test: /\.css$/,
          use: [
            /**
             * MiniCssExtractPlugin doesn't support HMR.
             * For developing, use 'style-loader' instead.
             * */
            prod ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    mode,
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new CopyPlugin([{ from: './public', to: './public' }]),
      ...htmlPlugins,
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: !!(env && env.analyze),
      }),
    ],
    devtool: prod ? false : 'source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true,
    },
  };

  return config;
};
