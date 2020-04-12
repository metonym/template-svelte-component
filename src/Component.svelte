<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<h1 on:click={increment}>Increment count: {count}!</h1>
