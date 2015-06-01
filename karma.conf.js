'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    exclude: [],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['mocha', 'dots', 'junit'],
    junitReporter: {
      outputFile: 'output/test-results.xml'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    webpack: require('./webpack.test.config'),
    webpackMiddleware: {
      noInfo: true
    }
  });
};
