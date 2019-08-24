<script>
  export let name;
</script>

<div class="id">
  <h1>Hello {name}!</h1>
</div>

<style>
  h1 {
    color: white;
  }

  .id {
    display: flex;
    transition: all 0.5s;
    user-select: none;
    background: linear-gradient(to bottom, white, black);
  }
</style>
