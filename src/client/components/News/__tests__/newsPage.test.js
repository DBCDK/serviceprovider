'use strict';

/**
 * @file
 * Test news page components
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NewsPageContainer from '../NewsPageContainer.component.js';
import NewsPageItem from '../NewsPageLayout.component.js';

describe('Test NewsList', () => {
  it('Lists of news should be generated', () => {
    const data = {
      id: 'id1',
      nid: 1,
      title: 'testTitle',
      lead: 'testLead',
      image: 'testImage',
      body: 'test body'
    };

    let element = React.createElement(NewsPageContainer, {id: 1, data});
    let dom = TestUtils.renderIntoDocument(element);
    const newsItem = TestUtils.findRenderedComponentWithType(dom, NewsPageItem);
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'image').props.children.props.src).to.be.equal('data:image/png;base64,testImage');
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'lead').innerText).to.be.equal(data.lead);
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'body').innerText).to.be.equal(data.body);
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'headline').innerText).to.be.equal(data.title);
  });
});

