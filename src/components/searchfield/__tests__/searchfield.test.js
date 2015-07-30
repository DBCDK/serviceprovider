'use strict';
/**
 * @file
 * Test of the SearchFieldContainer and integrations with stores and subcomponents
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Search from '../../searchfield/SearchFieldContainer.component.js';
import Filter from '../../filter/FilterlistContainer.component.js';
import {FilterGuide, TokenSearchField} from 'dbc-react-querystring';
import QueryStore from '../../../stores/QueryStore.store.js';
import FilterStore from '../../../stores/FilterStore.store.js';

describe('Test the Search component', () => {
  it('should only generate a search field and button when no properties', ()=> {
    let element = React.createElement(Search);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(0);
    let tokenSearchField = TestUtils.scryRenderedComponentsWithType(dom, TokenSearchField);
    expect(tokenSearchField).to.have.length(1);

  });
  it('should generate no filter guide', ()=> {
    let element = React.createElement(Filter);
    let dom = TestUtils.renderIntoDocument(element);
    let filterGuides = TestUtils.scryRenderedComponentsWithType(dom, FilterGuide);
    expect(filterGuides).to.have.length(0);
  });

  it('should generate filter guide and the should be selectable', (done)=> {
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

  it('no query in querystore should generate 0 tokens', ()=> {
    QueryStore.onReset();
    let element = React.createElement(Search);
    let dom = TestUtils.renderIntoDocument(element);
    let tokens = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'token');
    expect(tokens).to.have.length(0);
  });

  it('2 elements in querystore should generate 2 tokens', ()=> {
    QueryStore.getInitialState().query = [
      {value: 'test', type: 'testType'},
      {value: 'test2', type: 'testType2'}
    ];
    let element = React.createElement(Search);
    let dom = TestUtils.renderIntoDocument(element);
    let tokens = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'token');
    expect(tokens).to.have.length(2);
  });
});
