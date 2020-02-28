// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./common');
const {rootDir} = require('./shared')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(rootDir, './dist'),
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [],
});
