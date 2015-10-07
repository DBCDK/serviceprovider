'use strict';
import React from 'react/addons';
import {assert} from 'chai';

import ProfileImage from '../ProfileImage.component';

const TestUtils = React.addons.TestUtils;

describe('Testing the ProfileImage Component', () => {

  let render;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Should render a ReactImage component', () => {
    render = TestUtils.createRenderer();
    render.render(<ProfileImage />);
    const rendered = render.getRenderOutput();
    assert.equal(rendered.type, 'div', 'Found div');
    assert.equal(rendered._store.props.children.type.displayName, 'ReactImage', 'Found ReactImage');
  });

  it('Should render a ReactImageEditor component', () => {
    render = TestUtils.createRenderer();
    render.render(<ProfileImage editable={true} />);
    const rendered = render.getRenderOutput();
    assert.equal(rendered.type, 'div', 'Found div');
    assert.equal(rendered._store.props.children.type.displayName, 'ReactImageEditor', 'Found ReactImageEditor');
  });
});
