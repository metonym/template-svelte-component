import typescript from 'rollup-plugin-typescript2';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const IS_PROD = !process.env.ROLLUP_WATCH;

export default {
  input: pkg.svelte,
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'component' }
  ],
  plugins: [typescript(), svelte(), resolve()]
};
