'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var noErrorsPlugin = new webpack.NoErrorsPlugin();
var extractCss = new extractTextPlugin('../styles/style.css');

var APPLICATION = process.env.NODE_APPLICATION; // eslint-disable-line no-process-env
var NODE_ENV = process.env.NODE_ENV || 'production'; // eslint-disable-line no-process-env

var entries = {
  styles: ''
};

if (APPLICATION === 'ddbmobil') {
  entries = {
    frontpage: './src/client/components/FrontPage/index.js',
    library: './src/client/components/Library/index.js',
    librarysuggest: './src/client/components/LibrarySuggest/index.js',
    login: './src/client/components/Login/index.mobilsoeg.js',
    order: './src/client/components/Order/index.js',
    profile: './src/client/components/DDBProfile/index.js',
    querysearch: './src/client/components/searchpage/index.js',
    receipt: './src/client/components/Receipt/index.js',
    resetpassword: './src/client/components/ResetPassword/index.js',
    topnavigation: './src/client/components/TopNavigation/index.mobilsoeg.js',
    work: './src/client/components/Work/Work.client.mobilsoeg',
    news: './src/client/components/News/NewsPage.index',
    styles: './src/client/styles/ddb.scss'
  };
}
else {
  entries = {
    group: './src/client/components/Group/index.js',
    grouppost: './src/client/components/Group/Post/index.js',
    groupsearch: './src/client/components/Group/Search/index.js',
    library: './src/client/components/Library/index.js',
    librarysuggest: './src/client/components/LibrarySuggest/index.js',
    login: './src/client/components/Login/index.pg.js',
    order: './src/client/components/Order/index.js',
    profile: './src/client/components/Profile/index.js',
    querysearch: './src/client/components/searchpage/index.js',
    receipt: './src/client/components/Receipt/index.js',
    resetpassword: './src/client/components/ResetPassword/index.js',
    signup: './src/client/components/Signup/index.pg.js',
    topnavigation: './src/client/components/TopNavigation/index.pg.js',
    work: './src/client/components/Work/Work.client.pg',
    styles: './src/client/styles/pg.scss'
  };
}

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
  }
}];
