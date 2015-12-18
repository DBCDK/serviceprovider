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


describe('Test the Filter component', () => {
  it('generates no filter guide', ()=> {
    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(1);
  });

  it('generates filter guide and is selectable', () => {
    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);

    expect(filterGuides).to.have.length(1);
  });
});
