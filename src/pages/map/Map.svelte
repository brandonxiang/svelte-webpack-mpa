<script>
  import { key } from './leaflet.js';
  import { onMount, setContext } from 'svelte';

  export let lat;
  export let lon;
  export let zoom;

  let map;
  let container;

  setContext(key, {
    getMap: () => map,
  });

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.js';

    script.onload = () => {
      map = L.map(container).setView([lat, lon], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
    };

    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" />
</svelte:head>

<div bind:this={container}>
  {#if map}
    <slot />
  {/if}
</div>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>
