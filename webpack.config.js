'use strict';

var webpack = require('webpack');
var path = require('path');
var extractTextPlugin = require('extract-text-webpack-plugin');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var noErrorsPlugin = new webpack.NoErrorsPlugin();
var extractCss = new extractTextPlugin('../styles/style.css');

module.exports = [{
  name: "browser",
  entry: {
    querysearch: './src/components/querySearch/index.js',
    logo: './src/components/logo/index.js',
    autocomplete: './src/components/autocomplete/index.js'
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        //exclude: /node_modules/,
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
  plugins: [
    commonsPlugin,
    extractCss,
    noErrorsPlugin
  ]
},
  {
    // The configuration for the server-side rendering
    name: "server-side rendering",
    entry: "./src/app.js",
    target: "node",
    output: {
      path: __dirname,
      filename: "src/server.generated.js",
      libraryTarget: "commonjs2"
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: [
        {
          test: /\.js$/,
          //exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          exclude: /node_modules/,
          loader: 'json-loader'
        },
        { test: /\.scss$/,  loader: path.join(__dirname, "server", "style-collector") + "!css-loader" },
      ]
    }
  }
];
