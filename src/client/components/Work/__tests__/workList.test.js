'use strict';

/**
 * @file
 * Test WorkList components
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import WorkList from '../WorkList.component.js';

describe('Test NewsList', () => {
  const works = [{
    title: 'workListTitle',
    identifiers: ['870970-basis:52037719'],
    workType: 'book'
  }];

  it('WorkList is created', () => {
    let element = React.createElement(WorkList, {works, title: 'test list'});
    let dom = TestUtils.renderIntoDocument(element);
    expect(TestUtils.findRenderedDOMComponentWithClass(dom, 'title').innerText).to.be.equal(works[0].title);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'fa-book').length).to.be.equal(1);
    expect(TestUtils.findRenderedDOMComponentWithClass(dom, 'worklist--title').innerText).to.be.equal('test list');
  });
});
