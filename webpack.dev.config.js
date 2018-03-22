const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    open: false,
    hot: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});