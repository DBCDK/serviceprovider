'use strict';
/* eslint-disable */

import EntitySuggest from '../client.js';
import {assert, expect} from 'chai';
import sinon from 'sinon';
import request from 'request'


describe('Test methods in client.js', () => {
  before(function (done) {
    sinon
      .stub(request, 'get')
      .yields(null, {
        statusCode: 200,
      }, JSON.stringify({
        response: true
      }));
    done();
  });

  after(function (done) {
    request.get.restore();
    done();
  });

  it('Test init method', () => {
    expect(EntitySuggest).is.not.null;

    const init = EntitySuggest;
    assert.isFunction(init, 'init is a function');

    expect(init).to.throw(Error);

    let config = {};
    expect(() => init(config)).to.throw(Error);

    config = {endpoint: 'test', method: 'method'};
    expect(() => init(config)).to.not.throw(Error);

    const methods = init(config);
    assert.property(methods, 'getSubjectSuggestions');
    assert.property(methods, 'getCreatorSuggestions');
    assert.property(methods, 'getLibrarySuggestions');
  });

  it('Test getSubjectSuggestions Methods', (done) => {
    let suggest = EntitySuggest({
      method: 'entity-suggest',
      endpoint: 'http://xp-p02.dbc.dk/ms/entity-suggest/v1'
    });

    suggest.getSubjectSuggestions({query: 'display.title', rs: 5})
      .then((data) => {
        assert(request.get.firstCall.calledWith({
          uri: 'http://xp-p02.dbc.dk/ms/entity-suggest/v1/subject',
          qs: {query: 'display.title', rs: 5, lt: 'folkebibliotek'}
        }), 'request get called with specific object');
        assert(request.get.calledOnce, 'requests gets called once');
        assert.isObject(data, 'got object');
        assert.property(data, 'response');
        done();
      }).catch((err) => {
        done(err);
      }
    );
  });

  it('Test getCreatorSuggestions Methods', (done) => {
    let suggest = EntitySuggest({
      method: 'entity-suggest',
      endpoint: 'http://xp-p02.dbc.dk/ms/entity-suggest/v1'
    });

    suggest.getCreatorSuggestions({query: 'display.title', rs: 5})
      .then((data) => {
        assert(request.get.calledWith({
          uri: 'http://xp-p02.dbc.dk/ms/entity-suggest/v1/creator',
          qs: {query: 'display.title', rs: 5, lt: 'folkebibliotek'}
        }));
        assert.isObject(data, 'got object');
        assert.property(data, 'response');
        done();
      }).catch((err) => {
        done(err);
      }
    );
  });

  it('Test getLibrarySuggestions Methods', (done) => {
    let suggest = EntitySuggest({
      method: 'entity-suggest',
      endpoint: 'http://xp-p02.dbc.dk/ms/entity-suggest/v1'
    });

    suggest.getLibrarySuggestions({query: 'display.title', rs: 5, lt: 'testbibliotek'})
      .then((data) => {
        assert(request.get.calledWith({
          uri: 'http://xp-p02.dbc.dk/ms/entity-suggest/v1/library',
          qs: {query: 'display.title', rs: 5, lt: 'testbibliotek'}
        }));
        assert.isObject(data, 'got object');
        assert.isObject(data, 'got object');
        assert.property(data, 'response');
        done();
      }).catch((err) => {
        done(err);
      }
    );
  });
});
