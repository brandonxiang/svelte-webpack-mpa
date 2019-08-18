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

## LICENSE

[MIT](./LICENSE) @brandonxiang