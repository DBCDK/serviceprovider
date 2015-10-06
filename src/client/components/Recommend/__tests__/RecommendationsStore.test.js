'use strict';
import {assert} from 'chai';

import RecommendationStore from '../Recommendations.store';

describe('Test methods on the Recommendations Store object', () => {

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create(); // eslint-disable-line
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('The onRequest method should call the onDefault method when data is undefined', () => {
    sandbox.stub(RecommendationStore, 'onDefault');
    RecommendationStore.onRequest();
    assert.isTrue(RecommendationStore.onDefault.called);
  });

  it('The onRequest method should call the onDefault method when data is empty', () => {
    sandbox.stub(RecommendationStore, 'onDefault');
    RecommendationStore.onRequest({});
    assert.isTrue(RecommendationStore.onDefault.called);
  });

  it('The onRequest method should call the onDefault method when data.likes is empty', () => {
    sandbox.stub(RecommendationStore, 'onDefault');
    RecommendationStore.onRequest({likes: [], dislikes: []});
    assert.isTrue(RecommendationStore.onDefault.called);
  });

  it('The onRequest method should call the onDefault method when data.likes is non-array', () => {
    sandbox.stub(RecommendationStore, 'onDefault');
    RecommendationStore.onRequest({likes: {}, dislikes: ['a']});
    assert.isTrue(RecommendationStore.onDefault.called);
  });

  it('The onRequest method should call the onDefault method when data.dislikes is non-array', () => {
    sandbox.stub(RecommendationStore, 'onDefault');
    RecommendationStore.onRequest({likes: ['a'], dislikes: {}});
    assert.isTrue(RecommendationStore.onDefault.called);
  });

  it('Likes should match defaultLikes', () => {
    sandbox.stub(RecommendationStore, 'request');
    const defaultRecommendatins = RecommendationStore.getDefaultRecommendations();
    assert.isFalse(RecommendationStore.request.called);
    RecommendationStore.onRequest({});
    assert.isTrue(RecommendationStore.request.called);
    assert.equal(JSON.stringify(RecommendationStore.request.args[0][0].likes), JSON.stringify(defaultRecommendatins), 'It\'s a match!');
  });

  it('The requst should be sent when likes and dislikes are defined and arrays', () => {
    sandbox.stub(RecommendationStore, 'request');
    sandbox.stub(RecommendationStore, 'updatePending');
    RecommendationStore.onRequest({likes: ['a'], dislikes: []});
    assert.isTrue(RecommendationStore.request.called);
    assert.isTrue(RecommendationStore.updatePending.called);
  });

  it('The onResponse method should throw when response.error is set', () => {
    const errorMSg = 'someErrorMessage';
    assert.throw(() => RecommendationStore.onResponse({error: {statusMessage: errorMSg}}), Error, errorMSg);
  });

  it('The onResponse method should should trigger the store when result was parsed', () => {
    sandbox.stub(RecommendationStore, 'trigger');
    const result = ['a', 'b', 'c'];
    RecommendationStore.onResponse(result);
    assert.isTrue(RecommendationStore.trigger.called);
  });
});
