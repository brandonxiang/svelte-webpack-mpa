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

      L.tileLayer(
        'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken:
            'pk.eyJ1IjoieHdwaXNtZSIsImEiOiJ5cTlCQTlRIn0.QdV-wNUKbgs7jAlbVE747Q',
        }
      ).addTo(map);
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
