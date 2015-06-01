'use strict';
let wallabyWebpack = require('wallaby-webpack');
let webpackConfig = require('./webpack.config');
let webpackPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function() {
  return {
    files: [
      {pattern: 'src/tests/lib/phantomPolyfill.js', instrument: false},
      {pattern: 'src/components/**/*.scss', instrument: false, load: false},
      {pattern: 'src/components/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'src/**/*.test.js', load: false}
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
