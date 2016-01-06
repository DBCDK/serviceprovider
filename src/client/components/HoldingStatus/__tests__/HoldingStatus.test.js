'use strict';

/**
 * @file
 * Testing the Holding Status component
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

// Components
import HoldingStatus from '../HoldingStatus.component';

describe('Test Holding Status Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Assert rendering of empty Holding Status Div', () => {
    render.render(<HoldingStatus accessType='online' identifier='870970-basis:12345678' />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div');
    assert.strictEqual(rendered.props.className, 'work-container--work--editions--holding-status');
    assert.isUndefined(rendered.props.children.children);
  });

  it('Assert rendering of Holding Status Div', () => {
    render.render(<HoldingStatus accessType='physical' identifier='870970-basis:12345678' />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div');
    assert.strictEqual(rendered.props.children.props.className, 'status not-available');
  });

});
