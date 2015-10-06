'use strict';
/**
 * @file
 * Test of the Tabs Component
 */

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Tabs from '../Tabs.component.js';
import TabsButton from '../TabsButton.component.js';

describe('Test the Tabs component', () => {
  const update = () => {};
  const tabsData = [];
  tabsData.push({
    label: 'test 1',
    component: (<div className='test1'>content</div>)
  });
  tabsData.push({
    label: 'test 2',
    component: (<div className='test2'>content</div>)
  });

  let element = React.createElement(Tabs, {tabs: tabsData, update, defaultSelected: 0});
  let dom = TestUtils.renderIntoDocument(element);

  it('tabsbuttons are generated', ()=> {
    expect(TestUtils.scryRenderedComponentsWithType(dom, TabsButton)).to.have.length(2);
  });

  it('first tab is selected', ()=> {
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'tabs')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'tabs')[0].props.children).to.have.length(2);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'hide')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'test1')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'test2')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'hide')[0].props.children.props.className).to.equal('test2');
  });

  it('second tab is selected', ()=> {
    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(dom, 'a')[1]);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'tabs')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'tabs')[0].props.children).to.have.length(2);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'hide')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'test1')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'test2')).to.have.length(1);
    expect(TestUtils.scryRenderedDOMComponentsWithClass(dom, 'hide')[0].props.children.props.className).to.equal('test1');
  });
});
