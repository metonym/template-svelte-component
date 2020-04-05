<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    position: relative;
    max-width: 56rem;
    padding: 2em;
    margin: 0 auto;
  }
</style>

<main>
  <slot />
</main>
