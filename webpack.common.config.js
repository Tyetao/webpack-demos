const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: 'js/[name].js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },  
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },{
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192, // Byte
          name: 'images/[name].[hash:8].[ext]'
        }
      }]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'webpack'
    }),
    // new BundleAnalyzerPlugin()
  ]
};