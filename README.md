# svelte-webpack-mpa

<a href="https://github.com/brandonxiang/svelte-webpack-template/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/brandonxiang/svelte-webpack-template" alt="license">
</a>

## Boilerplate

This template is built for multi-page application(MPA). If you want to create a new project with SPA, see [template-webpack](https://github.com/sveltejs/template-webpack) or [webpack_svelte](https://github.com/theartkod/webpack_svelte).

## Usage

To create a new project based on this template using degit:

```shell
npx degit brandonxiang/svelte-webpack-mpa svelte-app
cd svelte-app
yarn
# or
npm i
```

Your static files can be placed into `public` folder.

## Development

```shell
yarn dev
# or
npm run dev
```

`http://localhost:9000/page1.html` is the first page. `http://localhost:9000/page2.html` is the second page.

## Build

Because of the extremely small bundle size of Svelte App, the common chunk for multi-pages is unneccessary to build. Each page has its own js bundle, or you can change webpack config by yourself. 

```shell
yarn build
# or
npm run build
```

## Analyze

```shell
yarn analyze
# or
npm run analyze
```

## Preprocess

Preprocess is the most interesting API of svelte. Therefore, [svelte-preprocess](https://github.com/kaisermann/svelte-preprocess) is included in the project. Postcss is essential for autoprefixer. Other style preprocessers, like sass, could be setted by yourself. 

## How to integate with vscode?

[OFFICAL INTEGRATIONS](https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/INTEGRATIONS.md)

## LICENSE

[MIT](./LICENSE) @brandonxiang