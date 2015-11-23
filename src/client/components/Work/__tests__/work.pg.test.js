'use strict';

/**
 * @file
 * Test of the WorkContainer component using the WorkLayout.pg component
 */

import {expect} from 'chai';
import {extend} from 'lodash';

import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Work from '../WorkContainer.container.component';
import WorkLayout from '../WorkLayout.pg.component';

import WorkStore from '../../../stores/Work.store.js';
import RecommendationsStore from '../../../stores/Recommendations.store.js';

import forceMajureMockWork from './work.mock.js';

describe('Test the Work component with data', () => {
  const info = {hits: 1, collections: 1};
  const result = forceMajureMockWork;
  const work = {result: result, info: info, error: []};
  let element = React.createElement(Work, {id: '870970-basis:50822311', work: work, workLayout: WorkLayout});
  let dom = TestUtils.renderIntoDocument(element);

  it('should have property props', ()=> {
    expect(dom).to.have.property('props');
  });

  it('should have specific id', ()=> {
    expect(dom.props).to.have.property('id');
    expect(dom.props.id).to.equal('870970-basis:50822311');
  });

  it('should have specific title', ()=> {
    expect(dom.props.work.result.title).to.equal('Force majeure');
  });

  it('should have one hit', ()=> {
    expect(dom.props.work.info.hits).to.equal(1);
  });
});

describe('Test the Work component without data', () => {
  const info = {hits: 0, collections: 0};
  const result = {};
  const work = {result: result, info: info, error: []};
  let element = React.createElement(Work, {id: '870970-basis:50822312', work: work, workLayout: WorkLayout});
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

describe('Test store with valid and invalid data', () => {

  afterEach(() => {
    WorkStore.update({
      work: {},
      info: [],
      error: []
    });
  });

  it('should test invalid data', () => {
    const workComponent = React.createElement(Work, {id: '870970-basis:50822312', workLayout: WorkLayout});
    let component = TestUtils.renderIntoDocument(workComponent);

    WorkStore.update({});

    expect(ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(component, Work)).innerHTML).to.contain('loader');
  });

  it('should test with no data', () => {
    const info = {hits: '0', collections: '0'};

    const workComponent = React.createElement(Work, {id: '', workLayout: WorkLayout});
    let component = TestUtils.renderIntoDocument(workComponent);

    WorkStore.update({
      work: {},
      info: info,
      error: []
    });

    expect(ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(component, Work)).innerHTML).to.contain('Værket blev ikke fundet');
  });

  xit('should test valid data', () => {
    let majureMock = extend({}, forceMajureMockWork);
    majureMock.editions[0].workType = 'other';

    const info = {hits: 1, collections: 1};
    const work = {work: majureMock, info: info, error: []};

    const workComponent = React.createElement(Work, {id: '870970-basis:50822312', workLayout: WorkLayout});
    let component = TestUtils.renderIntoDocument(workComponent);

    WorkStore.update(work);

    expect(ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(component, Work))).to.contain('Gå til desktopversion');
  });

  it('should test valid data varient', () => {
    let workMock = extend({}, forceMajureMockWork);
    workMock.isbns = ['isbn1', 'isbn2', 'isbn3'];
    workMock.actors = ['actor1', 'actor2', 'actor3'];
    workMock.subjects = ['subj1', 'subj2', 'subj3'];
    workMock.tracks = ['track1', 'track2', 'track3'];
    workMock.dk5s = [];
    workMock.languages = [];
    workMock.editions = [];

    const info = {hits: 1, collections: 1};
    const work = {work: workMock, info: info, error: []};

    const workComponent = React.createElement(Work, {id: '870970-basis:50822312', workLayout: WorkLayout});
    let component = TestUtils.renderIntoDocument(workComponent);

    WorkStore.update(work);

    const workHtml = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(component, Work)).innerHTML;

    expect(workHtml).to.contain('isbn1');
    expect(workHtml).to.contain('actor1');
    expect(workHtml).to.contain('subj1');
    expect(workHtml).to.contain('track1');

    expect(workHtml).to.contain('ISBN: ');
    expect(workHtml).to.contain('Medvirkende: ');
    expect(workHtml).to.contain('Emner: ');
    expect(workHtml).to.contain('Trackliste: ');
  });

  it('should test recommendations on a work', () => {
    const workComponent = React.createElement(Work, {id: '870970-basis:50822312', workLayout: WorkLayout});
    let component = TestUtils.renderIntoDocument(workComponent);

    const work = {work: forceMajureMockWork, info: {hits: 1, collections: 1}, error: []};
    const recommmendations = {generic: [{identifiers: ['870970-basis:28693699'], title: 'Oprør', creator: 'Suzanne Collins', workType: 'book'}]};

    RecommendationsStore.getRecommendationsResponse(recommmendations);
    WorkStore.update(work);

    const workHtml = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(component, Work)).innerHTML;
    expect(workHtml).to.contain('Noget der ligner');
    expect(workHtml).to.contain('Suzanne Collins');
  });
});
