# template-svelte-component

<!--
[![NPM][npm]][npm-url]
[![Build][build]][build-badge]
-->

> Template for building Svelte components.

This is a minimal template for building and documenting Svelte components.

- **Rollup** is used to build the component for ES/UMD formats.
- **Sapper** is used for component development and documentation (demo deployed using GitHub Pages). See the [demo](demo) folder.

## Install

```bash
yarn add -D template-svelte-component
```

## Usage

```html
<script>
  import Component from "template-svelte-component";
</script>

<Component />
```

## API

| Property name | Value                                    |
| :------------ | :--------------------------------------- |
| class         | `string` (default: 'default-class-name') |

## Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:focus
- on:blur
- on:keydown

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/template-svelte-component.svg?color=blue
[npm-url]: https://npmjs.com/package/template-svelte-component
[build]: https://travis-ci.com/metonym/template-svelte-component.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-svelte-component
