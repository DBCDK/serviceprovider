'use strict';
let wallabyWebpack = require('wallaby-webpack');
let webpackPostprocessor = wallabyWebpack({});
require('.src/tests/setup');

module.exports = function() {
  return {
    files: [
      {pattern: 'src/tests/lib/phantomPolyfill.js', instrument: false},
      {pattern: 'src/client/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'src/tests/test*.js', load: false}
    ],

    preprocessors: {
      '**/*.js': [
          file => require('babel').transform(file.content, {sourceMap: true})
      ]
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function() {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    },

    testFramework: 'mocha@2.2.4'
  };
};
