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
import WorkListActions from '../../../actions/WorkList.action.js';
import WorkListStore from '../../../stores/WorkList.store.js';
import WorkList from '../../Work/WorkList.component.js';

describe('Test NewsList', () => {
  const data = {
    id: 'id1',
    nid: 1,
    title: 'testTitle',
    lead: 'testLead',
    image: 'testImage',
    body: 'test body',
    relatedWorks: []
  };

  it('News Page should be generated', () => {
    let element = React.createElement(NewsPageContainer, {id: 1, data});
    let dom = TestUtils.renderIntoDocument(element);
    const newsItem = TestUtils.findRenderedComponentWithType(dom, NewsPageItem);
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'image').props.children.props.src).to.be.equal('http://rest.filmstriben.dbc.inlead.dk/web/testImage');
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'lead').innerText).to.be.equal(data.lead);
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'body').innerText).to.be.equal(data.body);
    expect(TestUtils.findRenderedDOMComponentWithClass(newsItem, 'headline').innerText).to.be.equal(data.title);
    expect(TestUtils.scryRenderedComponentsWithType(newsItem, WorkList).length).to.be.equal(0);
  });

  it('test related Worklist is generated', () => {
    sinon.spy(WorkListActions, 'getList'); // eslint-disable-line
    data.relatedWorks = ['870970-basis:52037719'];
    let element = React.createElement(NewsPageContainer, {id: '1', data});
    let dom = TestUtils.renderIntoDocument(element);
    expect(TestUtils.scryRenderedComponentsWithType(dom, WorkList).length).to.be.equal(0);
    expect(WorkListActions.getList.calledWith(data.relatedWorks)).to.be.equal(true);
    WorkListStore.trigger({
      elements: [
        {
          title: 'relatedTitle',
          identifiers: ['870970-basis:52037719']
        }
      ]
    });
    expect(TestUtils.findRenderedComponentWithType(dom, WorkList)).to.not.throw; // eslint-disable-line
    WorkListActions.getList.restore();
  });

});

