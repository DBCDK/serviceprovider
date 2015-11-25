'use strict';

/**
 * @file
 * Testing CoverImageContainer.component.js
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

import CoverImageContainer from '../CoverImageContainer.component.js';
import store from './testStore.js';

describe('Test CoverImageContainer Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
    render.render(<CoverImageContainer />);
  });

  it('Assert that an CoverImage component is rendered', () => {
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type.displayName, 'CoverImage', 'An CoverImage component was rendered');
  });

  it('Test method getImages when props.pids is undefined', () => {
    const dom = TestUtils.renderIntoDocument(<CoverImageContainer />);
    const images = dom.getImages(store);
    assert.isArray(images, 'getImages returned an array');
    assert.lengthOf(images, 0, 'getImages returned 0 images');
  });

  it('Test method getImages when props.pids is defined', () => {
    const dom = TestUtils.renderIntoDocument(
      <CoverImageContainer pids={['870970-basis:28200552']} />);
    const images = dom.getImages(store);
    assert.isArray(images, 'getImages returned an array');
    assert.lengthOf(images, 6, 'getImages returned 6 images');
  });

  it('Test method getImageUrl when props.prefSize is undefined', () => {
    const dom = TestUtils.renderIntoDocument(
      <CoverImageContainer pids={['870970-basis:28200552']} />);
    const images = dom.getImages(store);
    assert.strictEqual(dom.getImageUrl(images), '', 'An empty string was returned as expected');
  });

  it('Test method getImageUrl when props.prefSize is defined', () => {
    const dom = TestUtils.renderIntoDocument(
      <CoverImageContainer pids={['870970-basis:28200552']} prefSize={'detail_500'} />);
    const images = dom.getImages(store);
    assert.strictEqual(dom.getImageUrl(images), 'http://moreinfo.addi.dk/2.1/more_info_get.php?id=49173565&type=forside_500&key=ba0f7d4b1a841c3ce09f', 'Got an URL as expected');
  });

  it('Should display the noCoverUrl if defined and no images are defined', () => {
    const dom = TestUtils.renderIntoDocument(
      <CoverImageContainer noCoverUrl={'path/to/dummy/img'} pids={[]} prefSize={'detail_500'} />);
    const images = dom.getImages(store);
    assert.strictEqual(dom.getImageUrl(images), 'path/to/dummy/img', 'URL to dummy image was rendered as expected');
  });
});
