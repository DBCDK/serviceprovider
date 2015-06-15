'use strict';
import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Search from '../Search.component';
import {FilterGuide, TokenSearchField} from 'dbc-react-querystring';

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

    // Check if filterguide is rendered
    let element = React.createElement(Search, {filterElements});
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(1);
    let tokenSearchField = TestUtils.findRenderedComponentWithType(dom, TokenSearchField);

    // Click on first element
    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(filterGuides[0], 'a')[0]);
    expect(tokenSearchField.props.query).to.have.length(1);
    expect(tokenSearchField.props.query[0]).to.be.deep.equal(filterElements[0]);

    //Click on second element
    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(filterGuides[0], 'a')[1]);
    expect(tokenSearchField.props.query).to.have.length(2);
    expect(tokenSearchField.props.query[1]).to.be.deep.equal(filterElements[1]);

  });
  it('should generate default tokens', ()=> {
    let query = {
      'text': 'text1|text2',
      'term.type': 'type1|type2'
    }
    let element = React.createElement(Search, {query});
    let dom = TestUtils.renderIntoDocument(element);
    let searchField = TestUtils.findRenderedComponentWithType(dom, Search);
    let tokenSearchField = TestUtils.findRenderedComponentWithType(dom, TokenSearchField);
    let tokens = TestUtils.scryRenderedDOMComponentsWithClass(tokenSearchField, 'token');
    expect(tokens).to.have.length(4);
    expect(searchField.state.query).to.have.length(4);
 });
});
