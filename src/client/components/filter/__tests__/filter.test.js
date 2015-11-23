'use strict';
/**
 * @file
 * Test of the FilterContainer and integrations with stores and subcomponents
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Filter from '../FilterlistContainer.component.js';
import {FilterGuide} from 'dbc-react-components';
import FilterStore from '../../../stores/FilterStore.store.js';


describe('Test the Filter component', () => {
  xit('generates no filter guide', ()=> {
    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(0);
  });

  xit('generates filter guide and is selectable', ()=> {
    let filterElements = [
      {value: 'test', type: 'testType'},
      {value: 'test2', type: 'testType2'}
    ];

    FilterStore.setStore(filterElements);

    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);

    expect(filterGuides).to.have.length(1);

    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(filterGuides[0], 'a')[0]);
    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(filterGuides[0], 'a')[1]);
  });
});
