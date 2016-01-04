'use strict';
/**
 * @file
 * Testing the Like and Dislike containers
 */

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import LikeContainer from '../LikeContainer.component.js';

import ProfileActions from '../../../actions/Profile.action';

describe('Testing the Like container', () => {
  let likeContainer;
  let component;
  let sandbox;

  beforeEach(() => {
    likeContainer = React.createElement(LikeContainer, {objectId: 'some_pid'});
    component = TestUtils.renderIntoDocument(likeContainer);

    sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(ProfileActions, 'likeObject'); // eslint-disable-line
  });

  afterEach(() => {
    component.state.profile.likes = [];
    likeContainer = null;
    component = null;

    sandbox.restore();
  });

  it('Should be un-toggled when no matching item_id is found', () => {
    assert.isFalse(component.isToggled(), 'LikeContainer is un-toggled');
  });

  it('Should be un-toggled when an matching item_id is found with value = -1', () => {
    component.state.profile.likes = [{item_id: 'some_pid', value: '-1'}];
    assert.isFalse(component.isToggled(), 'LikeContainer is untoggled');
  });

  it('Should be toggled when an matching item_id is found with value = 1', () => {
    component.state.profile.likes = [{item_id: 'some_pid', value: '1'}];
    assert.isTrue(component.isToggled(), 'LikeContainer is toggled');
  });

  it('Should invoke onClick on click', () => {
    TestUtils.Simulate.click(ReactDom.findDOMNode(component));

    assert.isTrue(ProfileActions.likeObject.called);
    assert.isTrue(ProfileActions.likeObject.calledWith('some_pid'));
  });
});
