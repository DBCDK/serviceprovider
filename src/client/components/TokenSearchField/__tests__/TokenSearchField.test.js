'use strict';

/**
 * @file
 * Test TokenSearchField Component
 */

import {expect, assert} from 'chai';
import TestUtils from 'react-addons-test-utils';
import SearchField from '../TokenSearchField.component.js';
import Token from '../../TokenList/Token.component.js';
import React from 'react';

describe('Test the SearchField component', () => {
  it('displays a string with a close button', ()=> {
    let updateSpy = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    let state = {
      query: [{value: 'test1', index: 1}, {value: 'test2', index: 2}],
      update: updateSpy
    };

    // Create TokenList Compontent
    let element = React.createElement(SearchField, state);
    let dom = TestUtils.renderIntoDocument(element);
    let searchField = TestUtils.findRenderedComponentWithType(dom, SearchField);

    // Test state
    expect(searchField.props.query).to.have.length(2);

    // Test tokens are created
    let Tokens = TestUtils.scryRenderedComponentsWithType(dom, Token);
    expect(Tokens).to.have.length(2);

    // remove first button
    let label = TestUtils.findRenderedDOMComponentWithClass(Tokens[0], 'text').getDOMNode().textContent;
    expect(label).to.equal('test2');
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(Tokens[0], 'remove'));
    assert(updateSpy.calledWith([{value: 'test1', index: 1}]), 'called with remaining object');

  });

  it('should not append \'pending\' when props.pending is undefined', () => {
    const render = TestUtils.createRenderer();
    render.render(<SearchField query={[]} />);

    const rendered = render.getRenderOutput();
    const className = rendered.props.children.props.children.props.children.props.children.props.children[0].props.children[2].props.className;
    assert.equal(className, 'token-searchfield--spinner', 'pending class is not appended');
  });

  it('should not append \'pending\' when props.pending is false', () => {
    const render = TestUtils.createRenderer();
    render.render(<SearchField pending={false} query={[]} />);

    const rendered = render.getRenderOutput();
    const className = rendered.props.children.props.children.props.children.props.children.props.children[0].props.children[2].props.className;
    assert.equal(className, 'token-searchfield--spinner', 'pending class is not appended');
  });

  it('should append \'pending\' when props.pending is true', () => {
    const render = TestUtils.createRenderer();
    render.render(<SearchField pending={true} query={[]} />); // eslint-disable-line react/jsx-boolean-value

    const rendered = render.getRenderOutput();
    const className = rendered.props.children.props.children.props.children.props.children.props.children[0].props.children[2].props.className;
    assert.equal(className, 'token-searchfield--spinner pending', 'pending class is appended');
  });
});
