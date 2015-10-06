'use strict';
import React from 'react/addons';
import {assert} from 'chai';

import RecommendationContainer from '../RecommendationContainer.component';
import RecommendationActions from '../Recommendations.action';

describe('Test the RecommendationContainer.component', () => {
  let sandbox;
  let component;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    component = new RecommendationContainer();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('RecommendationActions.request is called with empty arrays when no profileLikes given', () => {
    sandbox.stub(RecommendationActions, 'request');
    const profileLikes = [];
    component.requestRecommendations(profileLikes);

    assert.isTrue(RecommendationActions.request.called);

    const args = RecommendationActions.request.args[0][0];
    const expected = {likes: [], dislikes: []};
    assert.equal(JSON.stringify(args), JSON.stringify(expected));
  });

  it('RecommendationActions.request is called with empty arrays when no profileLikes given', () => {
    sandbox.stub(RecommendationActions, 'request');
    const profileLikes = [{value: '1', item_id: '1'}, {value: '-1', item_id: '2'}];
    component.requestRecommendations(profileLikes);

    assert.isTrue(RecommendationActions.request.called);

    const args = RecommendationActions.request.args[0][0];
    const expected = {likes: ['1'], dislikes: ['2']};
    assert.equal(JSON.stringify(args), JSON.stringify(expected));
  });
});
