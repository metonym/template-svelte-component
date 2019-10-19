import typescript from 'rollup-plugin-typescript2';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const IS_PROD = !process.env.ROLLUP_WATCH;

const configDev = {
  input: 'src/index.ts',
  output: {
    sourcemap: !IS_PROD,
    format: 'iife',
    name: 'app',
    file: 'dist/bundle.js'
  },
  plugins: [
    copy({ targets: [{ src: 'public/*', dest: 'dist' }] }),
    typescript({ clean: true }),
    svelte({
      dev: !IS_PROD,
      css: css => {
        css.write('dist/bundle.css', !IS_PROD);
      }
    }),
    resolve(),
    commonjs(),
    !IS_PROD && serve({ contentBase: ['dist'], port: 5000 }),
    !IS_PROD && livereload({ watch: 'dist' }),
    IS_PROD && terser()
  ]
};

const configProd = {
  input: pkg.svelte,
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'component' }
  ],
  plugins: [typescript(), svelte(), resolve()]
};

const config = IS_PROD ? configProd : configDev;

export default config;
