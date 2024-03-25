import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const external = ['@jupyter-widgets/base'];

function plugins({
  ts
}) {
  return [
    resolve(),
    commonjs(),
    typescript(ts),
    json(),
  ];
}

/** @type {import('rollup').RollupOptions[]} */
const configs = [
  {
    input: 'src/extension.ts',
    external,
    output: {
      file: 'jupyter_react_widget_template/nbextension/jupyter-react-widget-template.js',
      format: 'amd',
      name: 'jupyter-react-widget-template'
    },
    plugins: plugins({
      ts: { compilerOptions: { declaration: false, sourceMap: false, outDir: './jupyter_react_widget_template/nbextension' } }
    }),
  },
  {
    input: 'src/plugin.ts',
    external,
    output: {
      dir: 'dist',
      format: 'cjs'
    },
    plugins: plugins({
      ts: { compilerOptions: { declaration: false, sourceMap: false, outDir: './dist' } }
    })
  }
];

export default configs;
