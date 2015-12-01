'use strict';
/* eslint-disable spaced-line-comment */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect, assert} from 'chai';

import AutoCompleteCategory from '../AutoCompleteCategory.component.js';
import AutoCompleteRow from '../AutoCompleteRow.component.js';

describe('Test AutoCompleteCategory Component', () => {

  it('Assert no errors when no props are provided', () => {
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory />);

    let container = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category-container').getDOMNode();

    expect(container.textContent).equal('');
  });

  it('Assert no label-container is rendered when no label is provided', () => {
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory />);
    let label = TestUtils.scryRenderedDOMComponentsWithClass(rendered, 'autocomplete--category--label');
    assert.lengthOf(label, 0, 'no DOM objects with className=\'autocomplete--category--label\' found');
  });

  it('Assert props.data is handled correct', () => {
    // no data provided
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory />);
    let rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');
    assert.equal(rowsContainer.props.children.length, 0);

    // data is provided but not in array
    let DATA = 'string-not-wrapped-in-array';
    rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory data={DATA}/>);
    rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');
    assert.equal(rowsContainer.props.children.length, 1);
    assert.isTrue(TestUtils.isElementOfType(rowsContainer.props.children[0], AutoCompleteRow), 'children element is of type AutoCompleteRow');
  });

  it('Assert correct rendering of AutoCompleteCategory component and children', () => {
    const DATA = ['test_0', 'test_1', 'test_2'];
    let rendered = TestUtils.renderIntoDocument(<AutoCompleteCategory data={DATA}/>);
    let rowsContainer = TestUtils.findRenderedDOMComponentWithClass(rendered, 'autocomplete--category--rows-container');

    assert.equal(rowsContainer.props.children.length, DATA.length);
    assert.isTrue(TestUtils.isElementOfType(rowsContainer.props.children[0], AutoCompleteRow), 'children element is of type AutoCompleteRow');
  });
});
