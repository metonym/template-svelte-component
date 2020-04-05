<script>
  let name = "world";
  let count = 1;

  function increment() {
    count += 1;
  }
</script>

<h1 on:click={increment}>Hello {name} {count}!</h1>
