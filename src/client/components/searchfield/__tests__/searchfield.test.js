'use strict';
/**
 * @file
 * Test of the SearchFieldContainer and integrations with stores and subcomponents
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Search from '../SearchFieldContainer.component.js';
import {TokenSearchField} from 'dbc-react-components';
import QueryStore from '../../../stores/QueryStore.store.js';

describe('Test the Search component', () => {
  it('Generates a search field no properties', ()=> {
    let element = React.createElement(Search, {query: []});
    let dom = TestUtils.renderIntoDocument(element);
    let tokenSearchField = TestUtils.scryRenderedComponentsWithType(dom, TokenSearchField);
    expect(tokenSearchField).to.have.length(1);
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

  it('Remove token from searchfield', ()=> {
    QueryStore.getInitialState().query = [
      {value: 'test', type: 'testType'},
      {value: 'test2', type: 'testType2'}
    ];

    let element = React.createElement(Search);
    let dom = TestUtils.renderIntoDocument(element);
    let tokens = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'token');
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(tokens[0], 'remove'));

    let store = QueryStore.getInitialState();
    expect(store.query).to.have.length(1);
  });
});
