"use strict";
let wallabyWebpack = require('wallaby-webpack');
let webpackPostprocessor = wallabyWebpack({});

module.exports = function() {
  return {
    files: [
      {pattern: 'tests/lib/phantomPolyfill.js', instrument: false},
      {pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false},
      {pattern: 'client/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'tests/test*.js', load: false}
    ],

    preprocessors: {
      '**/*.js': [
          file => require('babel').transform(file.content, {sourceMap: true}),
      ]
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function() {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    }
  }
};