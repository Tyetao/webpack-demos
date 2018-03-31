const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js',
    moment: ['vue-moment'],
    polyfill: ['babel-polyfill'],
    vue: ['vue']
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '~': resolve('src/components')
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.vue$/,
      exclude: /node_modules/,
      include: [resolve('src')],
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 8192, // Byte
        name: 'images/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      loader: 'file-loader',
      options: {
        limit: 10000,
        name: 'fonts/[name].[hash:8].[ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'moment', 'polyfill', 'vue']
    }),
    new BundleAnalyzerPlugin()
  ]
};
