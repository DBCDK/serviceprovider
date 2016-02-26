'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var noErrorsPlugin = new webpack.NoErrorsPlugin();
var extractCss = new extractTextPlugin('../styles/style.css');

var NODE_ENV = process.env.NODE_ENV || 'production'; // eslint-disable-line no-process-env


var entries = {
  frontpage: './src/client/components/FrontPage/index.js',
  header: './src/client/components/Header/index.js',
  footer: './src/client/components/Footer/index.js',
  login: './src/client/components/Login/index.js',
  order: './src/client/components/Order/index.js',
  profile: './src/client/components/Profile/index.js',
  querysearch: './src/client/components/searchpage/index.js',
  receipt: './src/client/components/Receipt/index.js',
  work: './src/client/components/Work/Work.client',
  news: './src/client/components/News/NewsPage.index',
  libraries: './src/client/components/LibraryAffiliateList/index.js',
  event: './src/client/components/Calendar/EventPage.index',
};


if (NODE_ENV === 'development') {
  entries.terminal = './src/utils/Terminal';
}

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
    lodash: '_',
    newrelic: 'newrelic'
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
