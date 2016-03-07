'use strict';
/* eslint-disable */

import PopSuggest from '../client.js';
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
    expect(PopSuggest).is.not.null;

    assert.isFunction(PopSuggest, 'init is a function');

    expect(() => PopSuggest()).to.throw(Error);

    let config = {};
    expect(() => init(config)).to.throw(Error);

    config = {endpoint: 'test', port: 1234};
    expect(() => PopSuggest(config)).to.not.throw(Error);

    assert.property(PopSuggest(config), 'getPopSuggestions');
  });

  it('Test getPopSuggestions Method on good URL', () => {
    let popSuggest = PopSuggest({
      name: 'popsuggest',
      endpoint: 'http://xp-p02.dbc.dk:8016/suggest'
    });

    const Promise = popSuggest.getPopSuggestions({index: 'display.author', query: 'Rowl', fields: ['display.author', 'display.title'],  filter: ['display.author'], rows: 50});
    return Promise.then((data) => {
      expect(request.get.firstCall.args[0]).to.be.deep.equal({
        uri: 'http://xp-p02.dbc.dk:8016/suggest',
        qs: {
          query: 'display.author:Rowl*',
          rows: 50,
          fields: 'display.author,display.title',
          filter: 'display.author',
          start: 0
        }
      });
      assert.isObject(data, 'got object');
      assert.property(data, 'response');
    });
  });

  it('Test profile in params', () => {
    let popSuggest = PopSuggest({
      name: 'popsuggest',
      endpoint: 'http://xp-p02.dbc.dk:8016/suggest',
      profile: 'test'
    });

    const Promise = popSuggest.getPopSuggestions({index: 'display.title', query: 'Rowl', filter: ['display.title']});
    return Promise.then((data) => {
      expect(request.get.firstCall.args[0]).to.be.deep.equal({
        uri: 'http://xp-p02.dbc.dk:8016/suggest',
        qs: {
          query: 'display.title:Rowl*',
          rows: 100,
          fields: null,
          filter: 'display.title',
          start: 0
        }
      });
      assert.isObject(data, 'got object');
      assert.property(data, 'response');
    });
  });

  it('Test default params', () => {
    let popSuggest = PopSuggest({
      name: 'popsuggest',
      endpoint: 'http://xp-p02.dbc.dk:8016/suggest'
    });

    const Promise = popSuggest.getPopSuggestions({query: 'Rowl'});
    return Promise.then((data) => {
      expect(request.get.firstCall.args[0]).to.be.deep.equal({
        uri: 'http://xp-p02.dbc.dk:8016/suggest',
        qs: {
          query: 'Rowl*',
          rows: 100,
          fields: null,
          filter: null,
          start: 0
        }
      });
      assert.isObject(data, 'got object');
      assert.property(data, 'response');
    });
  });
});
