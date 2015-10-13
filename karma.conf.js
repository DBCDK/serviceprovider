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
    proxies: {
      '/dummy.jpg': 'https://pg.demo.dbc.dk/dummy.jpg',
      '/like_inactive.png': 'https://pg.demo.dbc.dk/like_inactive.png',
      '/dislike_inactive.png': 'https://pg.demo.dbc.dk/dislike_inactive.png'
    },
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
      includeAllSources: true,
      dir: 'coverage/',
      reporters: [{
        type: 'html'
      }, {
        type: 'cobertura'
      }, {
        type: 'lcovonly',
        file: 'lcov.info',
        subdir: '.'
      }]
    }
  });
};
