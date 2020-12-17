const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    contentBase: 'dist',
    open: true
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
    }, ],
  },
  resolve: {
    modules: [
      "node_modules",
    ],
    // 拡張子を配列で指定
    extensions: [
      '.ts', '.js',
    ],
  },
}