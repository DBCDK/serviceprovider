'use strict';

/**
 * @file
 * Test Tokenlist component
 */

import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import TokenList from '../TokenList.component.js';
import Token from '../Token.component.js';
import React from 'react';

describe('Test the TokenList component', () => {
  it('displays a string with a close button', ()=> {
    var remove = sinon.spy();  // eslint-disable-line block-scoped-var, no-undef
    let state = {
      query: [{value: 'test', index: 1}],
      remove: remove
    };

    // Create TokenList Compontent
    let element = React.createElement(TokenList, state);
    let dom = TestUtils.renderIntoDocument(element);
    // Test state
    expect(dom.state.query).to.have.length(1);

    // Test button is created
    let btnStrings = TestUtils.findRenderedComponentWithType(dom, Token);

    // Test button has properties
    let label = TestUtils.findRenderedDOMComponentWithClass(btnStrings, 'text').getDOMNode().textContent;
    let x = TestUtils.findRenderedDOMComponentWithClass(btnStrings, 'remove').getDOMNode().textContent;
    expect(label).to.equal('test');
    expect(x).to.equal('x');

    // Test remove button
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(dom, 'remove'));

    // Test state is updated
    expect(remove.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('displays buttons with correct translations', () => {
    let state = {
      query: [{value: 'test', type: 'text', index: 1}, {value: 'Movie', index: 'term.workTypeMovie0', type: 'term.workType'}],
      remove: sinon.spy(), // eslint-disable-line no-undef
      translations: {
        Movie: 'Film'
      }
    };

    // Create TokenList Compontent
    let element = React.createElement(TokenList, state);
    let dom = TestUtils.renderIntoDocument(element);
    // Test state
    expect(dom.state.query).to.have.length(2);
    expect(dom.getDOMNode().innerHTML).to.have.string('Film');
  });
});
