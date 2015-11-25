'use strict';

/**
 * @file
 * Testing CoverImage.component.js
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import CoverImage from '../CoverImage.component.js';

describe('Test CoverImageComponent', () => {
  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
    render.render(<CoverImage />);
  });

  it('Assert type of rendered element', () => {
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'img', 'Component rendered element of type \'img\'');
  });

  it('Assert imgurl is undefined when imgurl is not given as prop', () => {
    const rendered = render.getRenderOutput();
    assert.isUndefined(rendered.props.src);
  });

  it('Assert imgurl is equwhen imgurl is not given as prop', () => {
    const path = 'this/is/a/path/to/an/image';
    render.render(<CoverImage imgurl={path} />);
    const rendered = render.getRenderOutput();

    assert.isDefined(rendered.props.src);
    assert.strictEqual(path, rendered.props.src);
  });
});
