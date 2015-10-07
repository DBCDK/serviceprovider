'use strict';

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import ImageEditor from '../ImageEditor.component.js';

describe('Test the ImageEditor', () => {

  it('should create ImageEditor', () => {
    let element = React.createElement(ImageEditor, {});
    let dom = TestUtils.renderIntoDocument(element);
    let imageEditor = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, ImageEditor));
    expect(imageEditor.innerHTML).to.contain('Beskær');
  });

  it('render image after upload', () => {
    let element = React.createElement(ImageEditor, {});
    let dom = TestUtils.renderIntoDocument(element);
    let imageEditor = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, ImageEditor));
    let uploadButton = TestUtils.findRenderedComponentWithType(dom, ImageEditor).refs.fileUpload;
    console.log(uploadButton);
    TestUtils.Simulate.change(uploadButton,
      {
        target: {
          files: [
            {
              lastModified: 1438870507004,
              name: '/dummy.jpg',
              size: 9951,
              type: 'image/jpeg',
              webkitRelativePath: ''
            }
          ]
        }
      }
    );
    expect(imageEditor.innerHTML).to.contain('Beskær');
  });
});
