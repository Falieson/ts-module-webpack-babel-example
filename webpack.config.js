const path = require('path');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: [ '.ts' ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /^(.*\.test\.ts$)/
        ],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'cats',
    libraryTarget: 'var',
    libraryExport: 'default'
  },
};