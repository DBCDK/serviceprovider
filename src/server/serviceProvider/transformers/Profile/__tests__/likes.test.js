'use strict';

import {assert} from 'chai';

import Transform from '../likes.transform.js';

/**
 * @file
 * Testing the likes.transform.js
 */

describe('Testing the likes.transform.js', () => {
  let spy = null;
  let connection = null;

  beforeEach(() => {
    spy = sinon.spy(); // eslint-disable-line no-undef
    Transform.makeCallToServiceClient = spy;

    connection = {
      request: {
        session: {}
      }
    };
  });

  it('Should provide an event', () => {
    assert.isString(Transform.event(), 'Got string as expected');
    assert.equal(Transform.event(), 'saveLike', 'String matches the expected');
  });

  it('Should test the like flow', () => {
    const query = {
      action: 'like',
      item_id: 'some_pid'
    };

    Transform.requestTransform('', query, connection);

    assert(spy.calledWith('saveLike', {accessToken: '', uid: '', item_id: query.item_id, value: 1}));
  });

  it('Should test the dislike flow', () => {
    const query = {
      action: 'dislike',
      item_id: 'some_pid'
    };

    Transform.requestTransform('', query, connection);

    assert(spy.calledWith('saveLike', {accessToken: '', uid: '', item_id: query.item_id, value: -1}));
  });

  it('Should test the update flow', () => {
    const query = {
      action: 'dislike',
      item_id: 'some_pid',
      id: 1
    };

    Transform.requestTransform('', query, connection);

    assert(spy.calledWith('updateLike', {accessToken: '', uid: '', item_id: query.item_id, value: -1, id: 1}));
  });

  it('Should test the remove flow', () => {
    const query = {
      action: 'remove',
      id: 1
    };

    Transform.requestTransform('', query, connection);

    assert(spy.calledWith('removeLike', {accessToken: '', uid: '', item_id: undefined, value: null, id: 1})); // eslint-disable-line no-undefined
  });

  it('Should test the responseTransform', () => {
    assert.isTrue(Transform.responseTransform({statusCode: 204}));
    assert.isTrue(Transform.responseTransform({statusCode: 200}));
    assert.isFalse(Transform.responseTransform({statusCode: 0}));

  });
});
