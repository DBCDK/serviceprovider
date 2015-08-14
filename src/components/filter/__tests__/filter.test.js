'use strict';
/**
 * @file
 * Test of the FilterContainer and integrations with stores and subcomponents
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Filter from '../../filter/FilterlistContainer.component.js';
import {FilterGuide} from 'dbc-react-components';
import QueryStore from '../../../stores/QueryStore.store.js';
import FilterStore from '../../../stores/FilterStore.store.js';

describe('Test the Filter component', () => {
  it('generates no filter guide', ()=> {
    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(0);
  });

  it('generates filter guide and is selectable', (done)=> {
    let filterElements = [
      {value: 'test', type: 'testType'},
      {value: 'test2', type: 'testType2'}
    ];

    FilterStore.setStore(filterElements);

    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);

    expect(filterGuides).to.have.length(1);
    // Click on first element

    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(filterGuides[0], 'a')[0]);
    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(filterGuides[0], 'a')[1]);

    setTimeout(() => {
      let store = QueryStore.getInitialState();
      expect(store.query).to.have.length(2);
      expect(store.query[0]).to.be.deep.equal(filterElements[0]);
      done();
    }, 0);
  });
});
