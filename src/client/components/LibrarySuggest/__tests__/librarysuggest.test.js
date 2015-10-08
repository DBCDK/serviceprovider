'use strict';

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import LibrarySuggestContainerComponent from '../LibrarySuggestContainer.component.js';
import {TokenSearchField} from 'dbc-react-components';

import LibrarySearchStore from '../../../stores/LibrarySearch.store.js';
import QueryStore from '../../../stores/QueryStore.store.js';
import LibrarySuggestStore from '../../../stores/LibrarySuggest.store.js';

describe('LibrarySuggest tests', () => {
  it('render librarysuggestcontainer without props', () => {
    let element = React.createElement(LibrarySuggestContainerComponent, {});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(dom, LibrarySuggestContainerComponent));
    expect(dmn.innerHTML).to.contain('Søg efter biblioteker her');
    ReactDOM.unmountComponentAtNode(dmn.parentNode);
  });

  it('render librarysuggestcontainer with props', () => {
    let element = React.createElement(LibrarySuggestContainerComponent, {
      libraryData: [{
        agencyName: 'Helsingør Kommunes Biblioteker',
        agencyId: '721700',
        branchId: '721701',
        branchNameDan: 'Espergærde Bibliotek',
        branchPhone: '49 28 26 30',
        branchEmail: 'esper@helsbib.dk',
        postalAddress: 'Kløvermarken 12',
        postalCode: '3060',
        city: 'Espergærde',
        openingHoursDan: 'Bibliotekets åbningstider og låneregler ses på vores hjemmeside http://www.helsbib.dk',
        branchWebsiteUrl: 'http://www.helsbib.dk'
      }],
      query: [{
        value: 'per',
        type: 'text',
        index: 'textper0'
      }]
    });

    let dom = TestUtils.renderIntoDocument(element);
    let dmn = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(dom, LibrarySuggestContainerComponent));
    expect(dmn.innerHTML).to.contain('Espergærde');
    ReactDOM.unmountComponentAtNode(dmn.parentNode);
  });

  it('render librarysuggestcontainer with query, but no data', () => {
    let sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(LibrarySearchStore, 'onQueryUpdated');

    const query = [{
      value: 'per',
      type: 'text',
      index: 'textper0'
    }];

    let element = React.createElement(LibrarySuggestContainerComponent, {libraryData: [], query});
    let dom = TestUtils.renderIntoDocument(element);
    let qStore = TestUtils.findRenderedComponentWithType(dom, LibrarySuggestContainerComponent).state.query;

    expect(qStore.query).to.equal(query);
    expect(LibrarySearchStore.onQueryUpdated.calledWith(qStore)).to.equal(true);
    sandbox.restore();
  });

  it('render librarysuggestcontainer and add element to query', () => {
    let element = React.createElement(LibrarySuggestContainerComponent, {libraryData: [], query: []});
    let dom = TestUtils.renderIntoDocument(element);

    const query = [{
      value: 'detteerenlangsøgning',
      type: 'text',
      index: 'textdetteerenlangsøgning0'
    }];

    QueryStore.onAdd(query[0]);

    let dmn = ReactDOM.findDOMNode(TestUtils.findRenderedComponentWithType(dom, LibrarySuggestContainerComponent));
    expect(dmn.innerHTML).to.contain('detteerenlangsøgning');
  });

  it('render librarysuggest and test listeners', () => {
    let element = React.createElement(LibrarySuggestContainerComponent, {libraryData: [], query: []});
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, TokenSearchField);
    let srch = dmn.refs.searchfield;

    TestUtils.Simulate.focus(srch);
    srch.value = 'detteerenlangsøgning';
    TestUtils.Simulate.change(srch);
    TestUtils.Simulate.keyDown(srch, {key: 'Enter', keyCode: 13, which: 13});

    LibrarySuggestStore.onTextfieldUpdated(srch.value);
    expect(ReactDOM.findDOMNode(dmn).innerHTML).to.contain('token-searchfield--spinner pending');
  });
});
