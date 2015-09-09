'use strict';
let wallabyWebpack = require('wallaby-webpack');
let webpackConfig = require('./webpack.config');
let babel = require('babel');
let webpackPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function(wallaby) {
  return {
    files: [
      {pattern: 'node_modules/sinon/pkg/sinon.js', instrument: false},
      {pattern: 'src/tests/lib/phantomPolyfill.js', instrument: false},
      {pattern: 'node_modules/babel-core/browser-polyfill.js', instrument: false}, // seen in this issue: https://github.com/wallabyjs/public/issues/109 -- https://babeljs.io/docs/learn-es2015/#map-set-weak-map-weak-set
      {pattern: 'src/components/**/*.scss', instrument: false, load: false},
      {pattern: 'src/components/**/*.js', load: false},
      {pattern: 'src/stores/*.js', load: false},
      {pattern: 'src/actions/*.js', load: false},
      {pattern: 'src/utils/*.js', load: false},
      {pattern: 'src/**/*.test.js', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*.test.js', load: false}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel
      })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function() {
      // required to trigger tests loading
      window.__moduleBundler.loadTests();
    },

    testFramework: 'mocha@2.2.4'
  };
};
