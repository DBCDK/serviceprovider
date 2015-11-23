'use strict';

/**
 * @file
 * Testing the RecommendationsContainer component
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import RecommendationContainer from '../RecommendationContainer.mobilsoeg.component';
import RecommendationActions from '../Recommendations.action';
import SearchResultList from '../../searchresult/SearchResultList.component';

describe('Test the RecommendationContainer.component', () => {
  let sandbox;
  let component;

  beforeEach(() => {
    sandbox = sinon.sandbox.create(); // eslint-disable-line
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

  it('Should render a SearchResultList component', () => {
    let element = React.createElement(RecommendationContainer);
    let dom = TestUtils.renderIntoDocument(element);
    assert.lengthOf(TestUtils.scryRenderedComponentsWithType(dom, SearchResultList), 1, 'RecommendationContainer rendered one SearchResultListComponent');
  });
});
