'use strict';

/**
 * @file
 * Testing AutoCompleteRow.component.js
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import AutoCompleteRow from '../AutoCompleteRow.component.js';
import CoverImage from '../../CoverImage/CoverImageContainer.component.js';

describe('Test AutoCompleteRow component', () => {
  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Should render image with src when props.image is given', () => {
    const path = 'this/is/a/path';
    render.render(<AutoCompleteRow image={path} showImage={true}/>); // eslint-disable-line react/jsx-boolean-value
    const rendered = render.getRenderOutput();
    const needle = rendered.props.children.props.children[0].props.children.type;
    assert.strictEqual(needle, 'img', 'Childre matches type \'img\'');
    assert.strictEqual(needle.props, path.src, 'type img has correct src');
  });

  it('Should render the component when a component is given in props.imageComp', () => {
    render.render(<AutoCompleteRow imageComp={CoverImage} showImage={true}/>); // eslint-disable-line react/jsx-boolean-value
    const rendered = render.getRenderOutput();
    const needle = rendered.props.children.props.children[0].props.children.displayName;
    assert.strictEqual(needle, 'CoverImageContainer', 'CoverImageContainer was rendered as expected');
  });

  it('Should render the component when both a component is given in props.imageComp and a string is given in image', () => {
    render.render(<AutoCompleteRow image={'some/path'} imageComp={CoverImage} showImage={true}/>); // eslint-disable-line react/jsx-boolean-value
    const rendered = render.getRenderOutput();
    const needle = rendered.props.children.props.children[0].props.children.displayName;
    assert.strictEqual(needle, 'CoverImageContainer', 'CoverImageContainer was rendered as expected');
  });
});
