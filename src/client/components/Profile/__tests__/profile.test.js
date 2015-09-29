'use strict';

import {assert, expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Profile from '../Profile.component.js';
import ProfileHeader from '../ProfileHeader.component.js';
import Image from '../ProfileImage.component.js';

let testProfile = {
  name: 'I-Love-Ponys',
  imageUrl: '/dummy.jpg',
  followingCount: 16,
  groupsCount: 7,
  followersCount: 35,
  editEnabled: false
};


describe('Test the Profile component', () => {
  it('should toggle to edit mode when edit button is clicked', () => {

    let element = React.createElement(Profile, {testProfile});
    let dom = TestUtils.renderIntoDocument(element);
    assert.equal(testProfile.editEnabled, false);
    let header = TestUtils.findRenderedComponentWithType(dom, ProfileHeader);
    let toggleButtonText = React.findDOMNode(header.refs.toggleButton).text;
    expect(toggleButtonText).to.be.equal('Rediger');
    TestUtils.Simulate.click(header.refs.toggleButton.getDOMNode());
    setTimeout(() => {
      toggleButtonText = React.findDOMNode(header.refs.toggleButton).text;
      expect(toggleButtonText).to.be.equal('Gem');
    }, 0);
  });
  it('should have a profile image in non-edit mode', () => {
    let element = React.createElement(Profile, {testProfile});
    let dom = TestUtils.renderIntoDocument(element);
    assert.equal(testProfile.editEnabled, false);
    let image = TestUtils.findRenderedComponentWithType(dom, Image);
    assert.instanceOf(image, Image);
  });
});
