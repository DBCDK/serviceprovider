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
import DislikeContainer from '../DislikeContainer.component.js';

import MobilSoegProfileActions from '../../../../actions/MobilSoegProfile.action';

describe('Testing the Like container', () => {
  let likeContainer;
  let component;
  let sandbox;

  beforeEach(() => {
    likeContainer = React.createElement(LikeContainer, {objectId: 'some_pid'});
    component = TestUtils.renderIntoDocument(likeContainer);

    sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(MobilSoegProfileActions, 'likeObject'); // eslint-disable-line
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

    assert.isTrue(MobilSoegProfileActions.likeObject.called);
    assert.isTrue(MobilSoegProfileActions.likeObject.calledWith('some_pid'));
  });
});

describe('Testing the Dislike container', () => {
  let dislikeContainer;
  let component;
  let sandbox;

  beforeEach(() => {
    dislikeContainer = React.createElement(DislikeContainer, {objectId: 'some_pid'});
    component = TestUtils.renderIntoDocument(dislikeContainer);

    sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(MobilSoegProfileActions, 'dislikeObject'); // eslint-disable-line
  });

  afterEach(() => {
    component.state.profile.likes = [];
    dislikeContainer = null;
    component = null;

    sandbox.restore();
  });

  it('Should be un-toggled when no matching item_id is found', () => {
    assert.isFalse(component.isToggled(), 'DislikeContainer is un-toggled');
  });

  it('Should be un-toggled when an matching item_id is found with value = 1', () => {
    component.state.profile.likes = [{item_id: 'some_pid', value: '1'}];
    assert.isFalse(component.isToggled(), 'DislikeContainer is un-toggled');
  });

  it('Should be toggled when an matching item_id is found with value = -1', () => {
    component.state.profile.likes = [{item_id: 'some_pid', value: '-1'}];
    assert.isTrue(component.isToggled(), 'DislikeContainer is toggled');
  });

  it('Should invoke onClick on click', () => {
    TestUtils.Simulate.click(ReactDom.findDOMNode(component));
    assert.isTrue(MobilSoegProfileActions.dislikeObject.called);
    assert.isTrue(MobilSoegProfileActions.dislikeObject.calledWith('some_pid'));
  });
});
