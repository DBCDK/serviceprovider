
import {assert} from 'chai';

import * as utils from '../utils';

describe('Unit tests of utils', () => {
  describe('die function', () => {
    it('should throw an error when die is called', () => {
      assert.throws(() => utils.die('hep!'));
    });
  });

  describe('functionName', () => {
    it('should return the function name', () => {
      function testFunctionName() {}
      assert.doesNotThrow(testFunctionName);
      assert.equal(utils.functionName(testFunctionName), 'testFunctionName');
    });
  });

  describe('log function', () => {
    it('should not log when log level is too low.', () => {
      const _log = console.log;
      console.log = () => {
        throw new Error('Should not be called now!');
      };

      assert.throws(console.log);

      const _logLevel = process.env.LOG_LEVEL;
      process.env.LOG_LEVEL = 'off';

      assert.doesNotThrow(() => utils.log.warn('This is a log message that won\'t be logged'));

      console.log = _log;
      process.env.LOG_LEVEL = _logLevel;
    });

    it('should log when log level is high', () => {
      const _log = console.log;
      console.log = () => {
        throw new Error('Should be called now!');
      };

      const _logLevel = process.env.LOG_LEVEL;
      process.env.LOG_LEVEL = 'debug';

      assert.throws(() => utils.log.error());

      console.log = _log;
      process.env.LOG_LEVEL = _logLevel;
    });
  });

  describe('getCurrentLogLevel', () => {
    it('should default to info', () => {
      const _logLevel = process.env.LOG_LEVEL;
      delete process.env.LOG_LEVEL;

      assert.equal(utils.getCurrentLogLevel(), 'INFO');

      process.env.LOG_LEVEL = _logLevel;
    });
  });

  describe('isDir', () => {
    it('should return true on dir', () => assert.ok(utils.isDir(__dirname)));
    it('should return false on file', () => assert.ok(!utils.isDir(__dirname + '/utils.test.js')));
    it('should log when dir does not exist', () => {
      const _log = console.log;
      console.log = () => {
        throw new Error('Should be called now!');
      };

      const _logLevel = process.env.LOG_LEVEL;
      process.env.LOG_LEVEL = 'debug';

      assert.throws(() => utils.isDir(__dirname + 'hep hep hep'));

      console.log = _log;
      process.env.LOG_LEVEL = _logLevel;
    });
  });

  describe('timing decorator', () => {
    it('should log when a function is wrapped in a timing decorator', () => {
      const _log = console.log;
      console.log = () => {
        throw new Error('Should be called now!');
      };

      const _logLevel = process.env.LOG_LEVEL;
      process.env.LOG_LEVEL = 'debug';

      const wrappedFunction = utils.timingDecorator(() => 2+2+3+4+5+6);
      assert.throws(() => wrappedFunction());

      console.log = _log;
      process.env.LOG_LEVEL = _logLevel;
    });

    it('should return the result of original function when called', () => {
      const wrappedFunction = utils.timingDecorator(() => 2+2+3+4+5+6);
      assert.equal(wrappedFunction(), 2+2+3+4+5+6);
    });
  });
});
