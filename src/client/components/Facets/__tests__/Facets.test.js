'use strict';

/**
 * @file
 * Testing the Facets components
 */

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {assert} from 'chai';

// Components
import FacetsContainer from '../FacetsContainer.component';
import FacetsResult from '../FacetsResult.component';
import FacetTerms from '../FacetTerms.component';

describe('Test Facets Container Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Assert rendering of empty Facets container', () => {
    render.render(<FacetsContainer />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div');
    assert.strictEqual(rendered.props.className, 'facet-result row');
    assert.isUndefined(rendered.props.children.children);
  });

});

describe('Test Facets Results Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Assert rendering of Facets result', () => {
    const facets = [
      {facetName: 'facet.type',
      terms: [{term: 'bog', count: '34'},
      {term: 'avisartikel', count: '22'},
      {term: 'ebog', count: '22'},
      {term: 'billedbog', count: '15'},
      {term: 'tidsskriftsartikel', count: '15'}]}];
    render.render(<FacetsResult facets={facets} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'div');
    assert.strictEqual(rendered.props.children[0].props.children[0].props.children, 'Materialetype');
    assert.strictEqual(rendered.props.children[0].props.children[2].props.children[0].props.facetName, 'facet.type');
  });

  it('Assert rendering of facet collapse buttons', () => {
    const facets = [
      {facetName: 'facet.type',
      terms: [{term: 'bog', count: '34'},
      {term: 'avisartikel', count: '22'},
      {term: 'ebog', count: '22'},
      {term: 'billedbog', count: '15'},
      {term: 'tidsskriftsartikel', count: '15'}]}];
    render.render(<FacetsResult facets={facets} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.props.children[0].props.children[0].type, 'h3');
    assert.strictEqual(rendered.props.children[0].props.children[1].props.collapsed, true);
    assert.strictEqual(rendered.props.children[0].props.children[2].props.className, 'facet collapsed');
  });

});

describe('Test Facet Terms Component', () => {

  let render = null;

  beforeEach(() => {
    render = TestUtils.createRenderer();
  });

  it('Assert rendering of Facet terms', () => {
    const terms = {terms: [{term: 'bog', count: '34'},
      {term: 'avisartikel', count: '22'},
      {term: 'ebog', count: '22'},
      {term: 'billedbog', count: '15'},
      {term: 'tidsskriftsartikel', count: '15'}]};
    render.render(<FacetTerms facetName='facet.type' terms={terms} />);
    const rendered = render.getRenderOutput();
    assert.strictEqual(rendered.type, 'form');
    assert.strictEqual(rendered.props.children[1].props.children[0].props.value, 'avisartikel');
  });

});
