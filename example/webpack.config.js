var { resolve } = require('path');

const rootDir = resolve(__dirname)

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(rootDir, 'dist'),
    filename: 'index.bundle.js'
  }
};
