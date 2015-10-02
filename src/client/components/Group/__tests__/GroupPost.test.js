'use strict';

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import {groupPost} from './GroupPost.mock.js';

import GroupPostContainer from '../Post/GroupPostContainer.component.js';
import GroupPostComponent from '../Post/GroupPost.component.js';

describe('Test the group post components', () => {
  it('Create GroupPostContainer with props', () => {
    let element = React.createElement(GroupPostContainer, {
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });
    let dom = TestUtils.renderIntoDocument(element);
    let GPost = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent));
    expect(GPost.innerHTML).to.contain('Dette er en kommentar');
  });
});
