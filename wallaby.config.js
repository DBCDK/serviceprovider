const babel = require('babel-core');

module.exports = function(wallaby) {
  return {
    files: [
      'package.json',
      'doc/work-context.jsonld',
      'doc/**/*.yaml',
      'src/**/*.js',
      '!src/**/*.test.js',
      '!src/**/__tests__/*.js'
    ],

    tests: ['src/**/*.test.js', 'src/**/__tests__/*.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        plugins: [
          'transform-es2015-modules-commonjs',
          'transform-async-to-generator'
        ]
      })
    },

    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: 'SMAUG=http://localhost:3000'
      }
    },

    testFramework: 'mocha@2.1.0'
  };
};
