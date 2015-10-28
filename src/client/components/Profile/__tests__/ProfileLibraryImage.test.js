'use strict';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import ProfileImage from '../ProfileImage.component';
import ImageEditor from '../../ImageEditor/ImageEditor.component.js';

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
    assert.equal(rendered.props.children.type.displayName, 'ReactImage', 'Found ReactImage');
  });

  it('Should render a ReactImageEditor component', () => {
    render = TestUtils.createRenderer();
    render.render(<ProfileImage editable={true} />); // eslint-disable-line react/jsx-boolean-value
    const rendered = render.getRenderOutput();
    assert.equal(rendered.type, 'div', 'Found div');
    assert.equal(rendered.props.children.type.displayName, 'ReactImageEditor', 'Found ReactImageEditor');
  });

  it('Should render a ReactImageEditor component', () => {
    let element = React.createElement(ProfileImage, {
      editable: true,
      url: 'https://http.cat/204'
    });

    let dom = TestUtils.renderIntoDocument(element);
    let dmn = TestUtils.findRenderedComponentWithType(dom, ImageEditor);
    TestUtils.Simulate.click(dmn.refs.cropButton);
  });
});
