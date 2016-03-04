'use strict';

/**
 * @file
 * Testing failing requests
 */

/* eslint-disable */

import DdbContent from '../client.js';
import {assert, expect} from 'chai';
import sinon from 'sinon';
import request from 'request'

describe('Test Failing scenarius in client.js', () => {
  afterEach(function (done) {
    request.get.restore();
    done();
  });

  it('Test getSubjectSuggestions Method on bad URL', (done) => {
    sinon
      .stub(request, 'get')
      .yields(null, {
        statusCode: 404,
      }, '<html></html>'
    );

    const suggest = DdbContent({
      endpoint: 'http://am.fs_rest.dev.inlead.dk/web',
      agency: '100000',
      key: 'b2573a3ea77a938fa86dc9fa05c99888f26992e9'
    });

    suggest.getContentById({node: 1})
      .then((data) => {
        done(new Error('This promise should fail'));
      }).catch((err) => {
        assert.property(err, 'error');
        assert.isDefined(err.error.statusCode, 'statusCode is defined');
        assert.notEqual(err.error.statusCode, 200, 'statusCode is not 200');
        done();
      });
  });

  it('Test getContentById Method with failing promise', (done) => {
    sinon
      .stub(request, 'get').yields({err: 'failure'});

    const suggest = DdbContent({
      endpoint: 'http://am.fs_rest.dev.inlead.dk/web',
      agency: '100000',
      key: 'b2573a3ea77a938fa86dc9fa05c99888f26992e9'
    });

    suggest.getContentById({node: 1})
      .then((data) => {
        done(new Error('This promise should fail'));
      }).catch((err) => {
        assert.property(err, 'error');
        done();
      });
  });
});
