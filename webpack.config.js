'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var noErrorsPlugin = new webpack.NoErrorsPlugin();
var extractCss = new extractTextPlugin('../styles/style.css');

var NODE_ENV = process.env.NODE_ENV || 'production'; // eslint-disable-line no-process-env


var entries = {
  // Removed references to client components index.js files.
};


module.exports = [{
  name: 'browser',

  entry: entries,

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ]
  },

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    lodash: '_'
  },

  plugins: [
    commonsPlugin,
    extractCss,
    noErrorsPlugin
  ],

  watchOptions: {
    poll: true
  },

  node: {
    fs: 'empty',
    tls: 'empty'
  }
}];
