'use strict';

/**
 * @file
 * Test news list components
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NewsPage from '../NewsListContainer.component.js';
import NewsListItem from '../NewsListItemLayout.component.js';

describe('Test NewsList', () => {
  it('Lists of news should be generated', () => {
    const data = {
      news: {
        items: [{
          id: 'id1',
          nid: 1,
          title: 'testTitle',
          lead: 'testLead',
          image: 'testImage'
        }, {
          id: 'id2',
          nid: 2,
          title: 'testTitle 2',
          lead: 'testLead 2'
        }]
      }
    };

    let element = React.createElement(NewsPage, {data});
    let dom = TestUtils.renderIntoDocument(element);
    const newsItem = TestUtils.scryRenderedComponentsWithType(dom, NewsListItem);
    TestUtils.findRenderedDOMComponentWithClass(newsItem[0], 'image');
    TestUtils.findRenderedDOMComponentWithClass(newsItem[0], 'lead');
    TestUtils.findRenderedDOMComponentWithClass(newsItem[0], 'news-item');
    TestUtils.findRenderedDOMComponentWithClass(newsItem[0], 'headline');
    TestUtils.findRenderedDOMComponentWithClass(newsItem[1], 'lead');
    TestUtils.findRenderedDOMComponentWithClass(newsItem[1], 'news-item');
    TestUtils.findRenderedDOMComponentWithClass(newsItem[1], 'headline');
    TestUtils.findRenderedDOMComponentWithTag(newsItem[0], 'img');
    expect(TestUtils.scryRenderedDOMComponentsWithTag(newsItem[0], 'img').length).to.be.equal(1);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(newsItem[1], 'img').length).to.be.equal(0);
  });

  it('List of news should be toggled when clicking on show-more button', (done) => {
    const data = {
      news: {
        items: [{
          id: 'id1',
          nid: 1,
          title: 'testTitle',
          lead: 'testLead',
          image: 'testImage'
        }, {
          id: 'id2',
          nid: 2,
          title: 'testTitle 2',
          lead: 'testLead 2'
        }
        ]
      }
    };

    let element = React.createElement(NewsPage, {data, showNumberOfPosts: '1'});
    let dom = TestUtils.renderIntoDocument(element);

    const newsDefault = TestUtils.findRenderedDOMComponentWithClass(dom, 'news-default');
    const newsMore = TestUtils.findRenderedDOMComponentWithClass(dom, 'news-more');
    expect(newsDefault.children.length).to.be.equal(1);
    expect(newsMore.children.length).to.be.equal(1);
    const toggleLink = TestUtils.findRenderedDOMComponentWithClass(dom, 'show-more');

    TestUtils.Simulate.click(toggleLink);
    setTimeout(() => {
      // news items should be moved from news-more to news-default
      expect(newsDefault.children.length).to.be.equal(2);
      expect(newsMore.children.length).to.be.equal(0);
      done();
    }, 0);
  });
});
