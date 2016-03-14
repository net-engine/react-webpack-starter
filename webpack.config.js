var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    './src/style/main.scss',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: "./dist",
    historyApiFallback: true
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.scss$/,
        //loader: "style!css!autoprefixer!sass"
        loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer!sass")
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: 'dist',
      template: 'src/index.html',
      title: 'React start'
    }), 
    new ExtractTextPlugin("[name].css")
  ]
};
