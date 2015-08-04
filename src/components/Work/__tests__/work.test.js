'use strict';
/**
 * @file
 * Test of work component
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Work from '../Work.component';

describe('Test the Work component with data', () => {
  const info = {hits: 1, collections: 1};
  const result = {general: {title: 'Force majeure'}};
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
