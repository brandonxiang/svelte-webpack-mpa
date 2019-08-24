<script>
  import { getContext } from 'svelte';
  import { key } from './leaflet.js';

  const { getMap } = getContext(key);
  const map = getMap();

  export let lat;
  export let lon;
  export let label;

  var marker = L.marker([lat, lon]).addTo(map);

  if (label) {
    marker.bindPopup(label);
  }
</script>
