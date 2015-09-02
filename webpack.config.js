'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var noErrorsPlugin = new webpack.NoErrorsPlugin();
var extractCss = new extractTextPlugin('../styles/style.css');

module.exports = [{
  name: 'browser',
  entry: {
    querysearch: './src/components/searchpage/index.js',
    profile: './src/components/Profile/index.js',
    library: './src/components/Library/index.js',
    librarysuggest: './src/components/LibrarySuggest/index.js',
    login: './src/components/Login/index.js',
    signup: './src/components/Signup/index.js',
    resetpassword: './src/components/ResetPassword/index.js',
    work: './src/components/Work/Work.client',
    order: './src/components/Order/index.js',
    receipt: './src/components/Receipt/index.js',
    styles: process.env.NODE_APPLICATION === 'ddbmobil' && './src/styles/ddb.scss' || './src/styles/pg.scss' // eslint-disable-line no-process-env
  },
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
    lodash: '_',
    newrelic: 'newrelic'
  },

  plugins: [
    commonsPlugin,
    extractCss,
    noErrorsPlugin
  ]
}
];
