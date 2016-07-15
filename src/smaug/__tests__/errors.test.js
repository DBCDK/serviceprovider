

import {assert} from 'chai';
import * as errors from '../errors';

describe('Testing SMAUG errors', () => {
  it('should be constructable with new', () => {
    Object.keys(errors).forEach(error => assert.doesNotThrow(() => new errors[error](), 'Missing token error can be constructed.'));
  });

  it('Should contain name, message, stack, httpStatusCode, httpError', () => {
    Object.keys(errors).forEach(error => {
      const err = new errors[error]();

      assert.ok(err.name);
      assert.ok(err.message);
      assert.ok(err.stack);
      assert.ok(err.httpStatusCode);
      assert.ok(err.httpError);
    });
  });

  it('Should have a toJson method', () => {
    Object.keys(errors).forEach(error => {
      const err = new errors[error]();
      assert.doesNotThrow(() => err.toJson());
    });
  });
});

