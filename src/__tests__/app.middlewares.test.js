

import {assert} from 'chai';
import {MultipleTokensError, MissingTokenError} from '../smaug/errors';
import {getContextMiddleware} from '../app.middlewares';

describe('Testing the app.middlewares.js', () => {
  it('Should throw a MultipleTokensError', () => {
    const expectedError = new MultipleTokensError();
    const req = {
      get: () => 'Bearerr testtoken',
      query: {
        access_token: 'query_access_token'
      },
      body: {
        access_token: 'body_access_token'
      }

    };
    const res = {
      logData: {

      }
    };
    const next = arg => arg;

    const result = getContextMiddleware(req, res, next);

    assert.equal(result.name, expectedError.name);
    assert.equal(result.message, expectedError.message);
    assert.equal(result.httpStatusCode, expectedError.httpStatusCode);
    assert.equal(result.httpError, expectedError.httpError);
  });

  it('Should throw a MissingTokenError', () => {
    const expectedError = new MissingTokenError();
    const req = {
      get: () => 'Bearerr testtoken',
      query: {
      },
      body: {
      }

    };
    const res = {
      logData: {

      }
    };
    const next = arg => arg;

    assert.deepEqual(res, {logData: {}});

    const result = getContextMiddleware(req, res, next);

    assert.deepEqual(res, {logData: {access_token: undefined}}); // eslint-disable-line no-undefined
    assert.equal(result.name, expectedError.name);
    assert.equal(result.message, expectedError.message);
    assert.equal(result.httpStatusCode, expectedError.httpStatusCode);
    assert.equal(result.httpError, expectedError.httpError);
  });
});
