'use strict';

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import GroupSearchResultsComponent from '../Search/GroupSearchResults.component.js';
import {groupSearchMock} from './GroupSearch.mock.js';

describe('Test the group search components', () => {
  it('Create GroupSearchResultsComponent with a pending search', () => {
    const searchPlaceholder = 'This is the searching placeholder, it should definitely be unique!';

    let element = React.createElement(GroupSearchResultsComponent, {
      data: [],
      emptyMessage: '',
      pending: true,
      query: [''],
      searchingPlaceholder: searchPlaceholder
    });
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupSearchResultsComponent));
    expect(dmn.innerHTML).to.contain(searchPlaceholder);
  });

  it('Create GroupSearchResultsComponent with empty data and non empty query', () => {
    const emptyPlaceholder = 'This is the empty placeholder, it should definitely be unique!';

    let element = React.createElement(GroupSearchResultsComponent, {
      data: [],
      emptyMessage: emptyPlaceholder,
      pending: false,
      query: [''],
      searchingPlaceholder: ''
    });
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupSearchResultsComponent));
    expect(dmn.innerHTML).to.contain(emptyPlaceholder);
  });

  it('Create GroupSearchResultsComponent with empty data and empty query', () => {
    const emptyPlaceholder = 'Vi kunne desværre ikke finde nogle resultater';
    const searchPlaceholder = 'Søger, vent veligst';

    let element = React.createElement(GroupSearchResultsComponent, {
      data: [],
      pending: false,
      query: []
    });
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupSearchResultsComponent));
    expect(dmn.innerHTML).to.not.contain(emptyPlaceholder);
    expect(dmn.innerHTML).to.not.contain(searchPlaceholder);
  });

  it('Create GroupSearchResultsComponent with a pending search without a searchplaceholder prop', () => {
    const searchPlaceholder = 'Søger, vent veligst';

    let element = React.createElement(GroupSearchResultsComponent, {
      data: [],
      pending: true,
      query: ['']
    });
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupSearchResultsComponent));
    expect(dmn.innerHTML).to.contain(searchPlaceholder);
  });

  it('Create GroupSearchResultsComponent with empty data and non empty query', () => {
    const emptyPlaceholder = 'Vi kunne desværre ikke finde nogle resultater';

    let element = React.createElement(GroupSearchResultsComponent, {
      data: [],
      pending: false,
      query: ['']
    });
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupSearchResultsComponent));
    expect(dmn.innerHTML).to.contain(emptyPlaceholder);
  });

  it('Create GroupSearchResultsComponent with data and query', () => {
    let element = React.createElement(GroupSearchResultsComponent, {
      data: groupSearchMock,
      pending: false,
      query: [groupSearchMock[3].name]
    });
    let dom = TestUtils.renderIntoDocument(element);
    let dmn = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupSearchResultsComponent));
    expect(dmn.innerHTML).to.contain('search-item');
  });
});
