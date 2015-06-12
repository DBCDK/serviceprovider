'use strict';
import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Search from '../Search.component';
import {FilterGuide, TokenSearchField} from 'dbc-react-querystring';
//import FilterGuideListElement from '../FilterGuideListElement.component.js';

describe('Test the Search component', () => {
  it('should only generate a search field and button when no properties', ()=> {
    let element = React.createElement(Search);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(0);

  });
  it('should generate filter guide and the should be selectable', ()=> {
    let filterElements = [
      {value: 'test', type: 'testType'},
      {value: 'test2', type: 'testType2'}
    ];
    let element = React.createElement(Search, {filterElements});
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(1);
    let tokenSearchField = TestUtils.findRenderedComponentWithType(dom, TokenSearchField);
    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(filterGuides[0], 'a')[0]);
    expect(tokenSearchField.props.query).to.have.length(1);
    expect(tokenSearchField.props.query).to.be.deep.equal([filterElements[0]]);

  });
});
