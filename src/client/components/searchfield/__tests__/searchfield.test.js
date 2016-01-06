'use strict';
/**
 * @file
 * Test of the SearchFieldContainer and integrations with stores and subcomponents
 */

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Search from '../SearchFieldContainer.component.js';
import TokenSearchField from '../../TokenSearchField/TokenSearchField.component';
import QueryStore from '../../../stores/QueryStore.store.js';
import AutoCompleteActions from '../../AutoComplete/AutoComplete.action.js';
import AutoCompleteStore from '../../AutoComplete/AutoComplete.store.js';
import InputFieldStore from '../../../stores/InputField.store.js';

describe('Test the Search component', () => {
  it('Generates a search field no properties', ()=> {
    let element = React.createElement(Search, {query: []});
    let dom = TestUtils.renderIntoDocument(element);
    let tokenSearchField = TestUtils.scryRenderedComponentsWithType(dom, TokenSearchField);
    expect(tokenSearchField).to.have.length(1);
  });

  it('no query in querystore should generate 0 tokens', ()=> {
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
    const domElement = TestUtils.scryRenderedDOMComponentsWithClass(dom, 'remove');
    TestUtils.Simulate.click(domElement[0]);

    let store = QueryStore.getInitialState();
    expect(store.query).to.have.length(1);

    React.unmountComponentAtNode(ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(dom, Search)).parentNode);
  });

  it('Tests the store listeners', () => {
    let element = React.createElement(Search, {});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, TokenSearchField);
    let srch = dmn.refs.searchfield;

    TestUtils.Simulate.focus(srch);
    srch.value = 'detteerenlangsøgning';
    TestUtils.Simulate.change(srch);
    TestUtils.Simulate.keyDown(srch, {key: 'Enter', keyCode: 13, which: 13});
    AutoCompleteActions.textfieldUpdated.response({});
    AutoCompleteStore.onTextfieldUpdated(srch.value);
    InputFieldStore.onChange(srch.value);

    expect(ReactDOM.findDOMNode(dmn).innerHTML).to.contain('token-searchfield--spinner pending');
  });
});
