'use strict';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {expect, assert} from 'chai';
import BibliographicData from '../DisplayBibliographicData.component.js';

describe('Test DisplayBibliographicData Component', () => {
  it('Assert correct rendering of BibliographicData component', function() {
    let rendered = TestUtils.renderIntoDocument(
      <BibliographicData cover={{images: []}} identifiers={['870970-basis:12345678']} title={"This is a test"} worktype={"book"} />);

    assert.equal(rendered.props.title, 'This is a test');
    assert.equal(rendered.props.identifiers[0], '870970-basis:12345678');

    let bibliographicData = React.findDOMNode(rendered);

    expect(React.findDOMNode(bibliographicData).children[0].className).to.contain('work');

    let title = bibliographicData.getElementsByClassName('title');

    expect(title[0].textContent).to.contain('This is a test');

  });

  it('Assert empty when no data provided', function() {
    let rendered = TestUtils.renderIntoDocument(
      <BibliographicData identifiers={[]} />);

    let bibliographicData = React.findDOMNode(rendered);

    assert.equal(bibliographicData.textContent, '');

    assert.equal(React.findDOMNode(bibliographicData).textContent, '');

  });
});
