'use strict';

/**
 * @file
 * Testing the DeleteLikesButton component
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

// Components
import DeleteLikesButton from '../DeleteLikesButton.component';

// Actions
import ProfileActions from '../../../actions/Profile.action';

describe('Testing the DeleteLikesButton component', () => {

  let sandbox;
  let dom;

  beforeEach(() => {
    sandbox = sinon.sandbox.create(); // eslint-disable-line no-undef
    dom = TestUtils.renderIntoDocument(<DeleteLikesButton />);
  });

  afterEach(() => {
    sandbox.restore();
    dom = null;
  });

  it('Should call the delteLikes method on ProfileActions', () => {
    const spy = sandbox.spy(ProfileActions, 'deleteLikes');
    const component = TestUtils.findRenderedDOMComponentWithTag(dom, 'a');
    TestUtils.Simulate.click(component, {testing: true});
    assert.isTrue(spy.called);
  });
});
