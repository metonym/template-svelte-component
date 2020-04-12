<style>
  :global(body) {
    font-family: "Public Sans";
    font-weight: 400;
  }
  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-LightItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-LightItalic.woff") format("woff");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-ExtraBold.woff2") format("woff2"),
      url("fonts/subset-PublicSans-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-MediumItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-MediumItalic.woff") format("woff");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-Light.woff2") format("woff2"),
      url("fonts/subset-PublicSans-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-Regular.woff2") format("woff2"),
      url("fonts/subset-PublicSans-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-BoldItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-BoldItalic.woff") format("woff");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-ThinItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-ThinItalic.woff") format("woff");
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-Bold.woff2") format("woff2"),
      url("fonts/subset-PublicSans-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-Black.woff2") format("woff2"),
      url("fonts/subset-PublicSans-Black.woff") format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-Medium.woff2") format("woff2"),
      url("fonts/subset-PublicSans-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-Italic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-Italic.woff") format("woff");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-SemiBoldItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-SemiBoldItalic.woff") format("woff");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-ExtraLight.woff2") format("woff2"),
      url("fonts/subset-PublicSans-ExtraLight.woff") format("woff");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-ExtraBoldItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-ExtraBoldItalic.woff") format("woff");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-ExtraLightItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-ExtraLightItalic.woff") format("woff");
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-SemiBold.woff2") format("woff2"),
      url("fonts/subset-PublicSans-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-BlackItalic.woff2") format("woff2"),
      url("fonts/subset-PublicSans-BlackItalic.woff") format("woff");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Public Sans";
    src: url("fonts/subset-PublicSans-Thin.woff2") format("woff2"),
      url("fonts/subset-PublicSans-Thin.woff") format("woff");
    font-weight: 100;
    font-style: normal;
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
