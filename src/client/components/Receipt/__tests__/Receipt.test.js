'use strict';

/**
 * @file
 * Testing Receipt.component.js
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import Receipt from '../Receipt.component.js';

describe('Test Receipt Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Assert type of rendered element', () => {
    const receipt = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: ['870970-basis:28183488']
    };
    render.render(<Receipt receipt={receipt} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div', 'Component rendered element of type \'div\'');
  });

  it('Should render headline: \'Bestilling af følgende materiale mislykkedes:\'', () => {
    const receipt = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };

    const element = React.createElement(Receipt, {receipt: receipt});
    const rendered = TestUtils.renderIntoDocument(element);
    rendered.setOrderPlaced({});

    const expected = 'Bestilling af følgende materiale mislykkedes:';
    assert.equal(rendered.state.headline, expected, 'Found headline');
  });

  it('Should render headline: \'Vi har modtaget din bestilling på:\'', () => {
    const receipt = {
      pickupAgency: '710100',
      title: 'This is a title',
      type: 'Bog',
      ids: '870970-basis:28183488'
    };

    const element = React.createElement(Receipt, {receipt: receipt});
    const rendered = TestUtils.renderIntoDocument(element);
    rendered.setOrderPlaced({'870970-basis:28183488': true});

    const expected = 'Vi har modtaget din bestilling på:';
    assert.equal(rendered.state.headline, expected, 'Found headline');
  });
});
