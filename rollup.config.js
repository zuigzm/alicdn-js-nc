import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import Resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    external: ['nc'],
    paths: {
      nc: 'https://g.alicdn.com/sd/ncpc/nc.js',
    },
  },
  sourceMap: true,
  plugins: [
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
    }),
    Resolve({
      jsnext: true,
      main: true,
      browser: true,
      preferBuiltins: false,
    }),
    replace({ 'require.extensions': 'null' }),
  ],
  external: ['source-map'],
};
