'use strict';

/**
 * @file
 * Testing the Login.mobilsoeg.component
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

// Components
import Login from '../Login.mobilsoeg.component';

describe('Testing the Login.mobilsoeg.component', () => {

  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('Assert inputfields are rendered', () => {
    assert.isTrue(true, 'true is true');
    renderer.render(<Login />);
    const result = renderer.getRenderOutput();

    assert.equal(result.type, 'div', 'Found outer div');

    // Form
    const form = result.props.children;
    assert.equal(form.type, 'form', 'Found form');
    assert.equal(form.props.action, '/profile/login', 'Action is set to /profile/login');
    assert.equal(form.props.method, 'POST', 'Method is set to POST');

    assert.equal(form.props.children.length, 5, 'Form has 5 childrens');
    assert.equal(form.props.children[0].type, 'h2', 'First child is h2');

    // LibrarySelector
    assert.equal(form.props.children[1].type, 'div', 'First child is div');
    const librarySelector = form.props.children[1].props.children.props.children;
    assert.equal(librarySelector[0], 'Vælg dit bibliotek');
    assert.equal(librarySelector[1].type.displayName, 'LibrarySelector', 'Found component with displayName LibrarySelector');

    // LoanerID input
    assert.equal(form.props.children[2].type, 'div', 'First child is div');
    const loanerIdinput = form.props.children[2].props.children.props.children[1];
    assert.equal(loanerIdinput.type, 'input', 'Type equals input');
    assert.equal(loanerIdinput.props.name, 'loanerid', 'name attribute on input is loanerid');
    assert.equal(loanerIdinput.props.type, 'number', 'type attribute on input is number');
    assert.equal(loanerIdinput.props.inputMode, 'numeric', 'inputMode is numeric');

    // PIN Input
    assert.equal(form.props.children[3].type, 'div', 'First child is div');
    const pin = form.props.children[3].props.children.props.children[1];
    assert.equal(pin.type, 'input', 'Type equals input');
    assert.equal(pin.props.name, 'pin', 'Name attribute equals pin');
    assert.equal(pin.props.type, 'password', 'Type attribute equals password');

    // Submit button
    assert.equal(form.props.children[4].type, 'div', 'First child is div');
    const submit = form.props.children[4].props.children.props;
    assert.equal(submit.className, 'button', 'className equals button');
    assert.equal(submit.type, 'submit', 'Type equals submit');
    assert.equal(submit.value, 'Log ind', 'Value equals \'Log ind\'');
  });
});
