'use strict';

/**
 * @file
 * Tests the rendering of the Like/Dislike component in the
 * WorkLayput.mobilsoeg component.
 */

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {assert} from 'chai';

// Components
import WorkLayout from '../WorkLayout.mobilsoeg.component';
import LikeContainer from '../../LikeDislike/MobilSoeg/LikeContainer.component.js';
import DislikeContainer from '../../LikeDislike/MobilSoeg/DislikeContainer.component.js';

// Mocks
import forceMajureMockWork from './work.mock.js';

describe('Test that Like/Dislike containers are rendered correctly as part of the Work component', () => {
  let component;
  const info = {hits: 1, collections: 1};
  const work = {result: forceMajureMockWork, info: info, error: []};

  beforeEach(() => {
    const workLayout = React.createElement(WorkLayout, {id: '870970-basis:50822312', work: work, specifics: [], editions: []});
    component = TestUtils.renderIntoDocument(workLayout);
  });

  afterEach(() => {
    const parentNode = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(component, WorkLayout)).parentNode;
    React.unmountComponentAtNode(parentNode);
    component = null;
  });

  it('Should not be visible to not logged in users', () => {
    const profile = {
      userIsLoggedIn: false
    };
    component.setState({profile: profile, work: work});

    assert.equal(TestUtils.scryRenderedComponentsWithType(component, LikeContainer).length, 0, 'No like-containers was found');
    assert.equal(TestUtils.scryRenderedComponentsWithType(component, DislikeContainer).length, 0, 'No dislike-containers was found');
  });

  it('Should be visible to logged in users', () => {
    const profile = {
      profile: {
        agencyid: 'agencyid'
      },
      userIsLoggedIn: true
    };

    component.setState({profile: profile});

    assert.equal(TestUtils.scryRenderedComponentsWithType(component, LikeContainer).length, 1, 'The like-containers was found');
    assert.equal(TestUtils.scryRenderedComponentsWithType(component, DislikeContainer).length, 1, 'The dislike-containers was found');
  });
});

