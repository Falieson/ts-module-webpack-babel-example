const { resolve } = require('path');

const rootDir = resolve(__dirname)

module.exports = {
  resolve: {
    extensions: ['.ts'],
  },
  context: resolve(rootDir, './src'),
  entry: {
    index: './index.ts',
  },
  output: {
    filename: '[name].js',
		publicPath: "build/",
    path: resolve(rootDir, './build'),

    library: 'AudioJS',
    libraryTarget: 'var',
    // libraryTarget: 'umd', // Fix: "Uncaught ReferenceError: exports is not defined".
    libraryExport: 'default'
  },

  mode: 'production',
  performance: {
    hints: "warning",
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ["@babel/preset-env",{"modules": "auto"}],
              "@babel/preset-typescript"
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread"
            ],
          }
        },
        exclude: [
          /node_modules/,
          /.*\.test\.ts/
        ],
      }
    ],
  },
  node: {
    fs: 'empty'
  },
};
