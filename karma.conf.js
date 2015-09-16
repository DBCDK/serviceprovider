'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: [
      'tests.utils.webpack.js',
      'tests.stores.webpack.js',
      'tests.components.webpack.js'
    ],
    exclude: [],
    preprocessors: {
      'tests.utils.webpack.js': ['webpack'],
      'tests.stores.webpack.js': ['webpack'],
      'tests.components.webpack.js': ['webpack']
    },
    reporters: ['mocha', 'junit', 'coverage'],
    junitReporter: {
      outputDir: 'output'
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
    },
    coverageReporter: {
      type: ['html', 'cobertura'],
      dir: 'coverage/'
    }
  });
};
