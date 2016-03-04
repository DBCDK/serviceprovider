'use strict';
/**
 * @file
 * Testing ddbContent client methods
 */

/* eslint-disable */

import DdbContent from '../client.js';
import {assert, expect} from 'chai';
import sinon from 'sinon';
import request from 'request'


describe('Test methods in client.js', () => {
  beforeEach(function (done) {
    sinon
      .stub(request, 'get')
      .yields(null, {
        statusCode: 200,
      }, JSON.stringify({
        response: true
      }));
    done();
  });

  afterEach(function (done) {
    request.get.restore();
    done();
  });

  it('Test init method', () => {
    expect(DdbContent).is.not.null;

    assert.isFunction(DdbContent, 'init is a function');

    expect(DdbContent).to.throw(Error);

    let config = {};
    expect(() => DdbContent(config)).to.throw(Error);

    config = {endpoint: 'test'};
    expect(() => DdbContent(config)).to.throw(Error);

    config = {endpoint: 'test', method: 'method'};
    expect(() => DdbContent(config)).to.throw(Error);

    config = {endpoint: 'test', agency: '1234', key: '1234'};
    expect(() => DdbContent(config)).to.not.throw(Error);

    const methods = DdbContent(config);
    assert.property(methods, 'getContentById');
    assert.property(methods, 'getContentList');
  });

  it('Test getContentById Method', (done) => {
    const config = {
      endpoint: 'http://am.fs_rest.dev.inlead.dk/web',
      agency: '100000',
      key: 'b2573a3ea77a938fa86dc9fa05c99888f26992e9'
    };
    let ddbContent = DdbContent(config);

    ddbContent.getContentById({node: 36})
      .then((data) => {
        assert(request.get.calledWith({
          uri: `${config.endpoint}/content/fetch`,
          qs: {node: 36, agency: config.agency, key: config.key}
        }));
        assert.isObject(data, 'got object');
        assert.property(data, 'response');
        done();
      }).catch((err) => {
        done(err);
      }
    );
  });

  it('Test getContentById Method no arguments', (done) => {
    const config = {
      endpoint: 'http://am.fs_rest.dev.inlead.dk/web',
      agency: '100000',
      key: 'b2573a3ea77a938fa86dc9fa05c99888f26992e9'
    };
    let ddbContent = DdbContent(config);
    ddbContent.getContentById({})
      .then((data) => {
        done(new Error('this promise should fail'));
      }).catch((err) => {
        assert.property(err, 'error');
        done();
      }
    );
  });

  it('Test getContentList Method', (done) => {
    const config = {
      endpoint: 'http://am.fs_rest.dev.inlead.dk/web',
      agency: '100000',
      key: 'b2573a3ea77a938fa86dc9fa05c99888f26992e9'
    };
    let ddbContent = DdbContent(config);
    assert.property(ddbContent, 'getContentList');
    ddbContent.getContentList({amount: 5})
      .then((data) => {
        assert(request.get.calledWith({
          uri: `${config.endpoint}/content/fetch`,
          qs: {agency: config.agency, key: config.key, amount: 5, sort: 'nid'}
        }));
        assert(request.get.calledOnce);
        assert.isObject(data, 'got object');
        assert.property(data, 'response');
        done();
      }).catch((err) => {
        done(err);
      }
    );
  });
});
