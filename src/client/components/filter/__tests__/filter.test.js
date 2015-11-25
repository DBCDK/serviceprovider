'use strict';
/**
 * @file
 * Test of the FilterContainer and integrations with stores and subcomponents
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Filter from '../FilterlistContainer.component.js';
import FilterGuide from '../../FilterGuide/FilterGuide.component';
import FilterStore from '../../FilterGuide/FilterStore.store.js';


describe('Test the Filter component', () => {
  it('generates no filter guide', ()=> {
    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(1);
  });

  it('generates filter guide and is selectable', () => {
    let filterElements = [
      {value: 'test', type: 'testType'},
      {value: 'test2', type: 'testType2'}
    ];

    FilterStore.setStore(filterElements);

    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);

    expect(filterGuides).to.have.length(1);
  });
});
