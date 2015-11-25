'use strict';

/**
 * @file
 * Test FilterGuide component.
 */

import {expect} from 'chai';
import TestUtils from 'react-addons-test-utils';
import FilterGuide from '../FilterGuide.component.js';
import FilterGuideListElement from '../FilterGuideListElement.component.js';
import React from 'react';

describe('Test the FilterGuide component', () => {
  it('displays a list of words', ()=> {
    let categories = [{type: 'term.workType', value: 'Movie', displayValue: 'Film', cssClass: 'worktype'}];

    let select = sinon.spy(); // eslint-disable-line block-scoped-var, no-undef
    let props = {
      categories,
      select
    };

    let element = React.createElement(FilterGuide, props);
    let dom = TestUtils.renderIntoDocument(element);
    let filterelements = TestUtils.scryRenderedComponentsWithType(dom, FilterGuideListElement);
    expect(filterelements).to.have.length(1);

  });
});
