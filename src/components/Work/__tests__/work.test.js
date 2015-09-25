'use strict';
/**
 * @file
 * Test of work component
 */

import {expect, assert} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Work from '../Work.component';
import LikeContainer from '../../LikeDislike/LikeContainer.component.js';
import DislikeContainer from '../../LikeDislike/DislikeContainer.component.js';
import forceMajureMockWork from './work.mock.js';

describe('Test the Work component with data', () => {
  const info = {hits: 1, collections: 1};
  const result = forceMajureMockWork;
  const work = {result: result, info: info, error: []};
  let element = React.createElement(Work, {id: '870970-basis:50822311', work: work});
  let dom = TestUtils.renderIntoDocument(element);

  it('should have property props', ()=> {
    expect(dom).to.have.property('props');
  });

  it('should have specific id', ()=> {
    expect(dom.props).to.have.property('id');
    expect(dom.props.id).to.equal('870970-basis:50822311');
  });

  it('should have specific title', ()=> {
    expect(dom.props.work.result.general.title).to.equal('Force majeure');
  });

  it('should have one hit', ()=> {
    expect(dom.props.work.info.hits).to.equal(1);
  });
});

describe('Test the Work component without data', () => {
  const info = {hits: 0, collections: 0};
  const result = {};
  const work = {result: result, info: info, error: []};
  let element = React.createElement(Work, {id: '870970-basis:50822312', work: work});
  let dom = TestUtils.renderIntoDocument(element);

  it('should have property props', ()=> {
    expect(dom).to.have.property('props');
  });

  it('should have specific id', ()=> {
    expect(dom.props).to.have.property('id');
    expect(dom.props.id).to.equal('870970-basis:50822312');
  });

  it('should have no work data', ()=> {
    expect(dom.props.work.result).to.not.have.property('general');
  });

  it('should have no hits', ()=> {
    expect(dom.props.work.info.hits).to.equal(0);
  });
});

describe('Test that Like/Dislike containers are rendered correctly as part of the Work component', () => {
  let component;
  const info = {hits: 1, collections: 1};
  const work = {result: forceMajureMockWork, info: info, error: []};

  beforeEach(() => {
    const workComponent = React.createElement(Work, {id: '870970-basis:50822312', work: work});
    component = TestUtils.renderIntoDocument(workComponent);
  });

  afterEach(() => {
    component = null;
  });

  it('Should not be visible to not logged in users', () => {
    const profile = {
      favoriteLibraries: [],
      userIsLoggedIn: false
    };
    component.setState({profile: profile, work: work});

    assert.equal(TestUtils.scryRenderedComponentsWithType(component, LikeContainer).length, 0, 'No like-containers was found');
    assert.equal(TestUtils.scryRenderedComponentsWithType(component, DislikeContainer).length, 0, 'No dislike-containers was found');
  });

  it('Should be visible to logged in users', () => {
    const profile = {
      favoriteLibraries: [],
      userIsLoggedIn: true
    };

    component.setState({profile: profile, work: work});

    assert.equal(TestUtils.scryRenderedComponentsWithType(component, LikeContainer).length, 1, 'The like-containers was found');
    assert.equal(TestUtils.scryRenderedComponentsWithType(component, DislikeContainer).length, 1, 'The dislike-containers was found');
  });
});
