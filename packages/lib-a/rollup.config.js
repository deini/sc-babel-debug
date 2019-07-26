const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

const pkg = require('./package.json');

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

module.exports = {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  external: makeExternalPredicate(externals),
  watch: {
    include: 'src/**'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' })
  ]
};

function makeExternalPredicate(externalsArr) {
  if (externalsArr.length === 0) {
    return () => false;
  }

  const externalPattern = new RegExp(`^(${externalsArr.join('|')})($|/)`);

  return id => externalPattern.test(id);
}
