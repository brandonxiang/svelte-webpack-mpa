import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'page1',
  },
});

window.app = app;

export default app;
