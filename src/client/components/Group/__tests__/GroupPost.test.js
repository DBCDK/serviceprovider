'use strict';

import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';

import {groupPost} from './GroupPost.mock.js';

import GroupPostStore from '../../../stores/GroupPost.store.js';
import ProfileStore from '../../../stores/Profile.store.js';

import GroupPostActions from '../../../actions/GroupPost.action.js';

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

  it('Create GroupPostContainer with props and data in state', () => {
    let mock = sinon.mock(GroupPostStore); // eslint-disable-line
    mock.expects('getInitialState').once().returns({data: groupPost.groupPostData, pending: false});

    let element = React.createElement(GroupPostContainer, {
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });

    let dom = TestUtils.renderIntoDocument(element);
    let GPost = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent));
    expect(GPost.innerHTML).to.contain('Dette er en kommentar');
    mock.verify();
    mock.restore();
  });

  it('Tests GroupPostActions get called', () => {
    let sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(GroupPostActions, 'fetchGroupPost');

    let element = React.createElement(GroupPostContainer, {
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });

    let dom = TestUtils.renderIntoDocument(element);
    let GPost = React.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent));
    expect(GPost.innerHTML).to.contain('Dette er en kommentar');

    expect(GroupPostActions.fetchGroupPost.calledOnce).to.equal(true);
    GroupPostActions.fetchGroupPost.calledWith(groupPost.groupPostId);
    sandbox.restore();
  });

  it('Tests GroupPost conditionals', () => {
    let commentText = '';

    let element = React.createElement(GroupPostComponent, {
      loggedIn: true,
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId,
      commentCb: (text) => {
        commentText = text;
      }
    });

    let dom = TestUtils.renderIntoDocument(element);
    let GPost = TestUtils.findRenderedComponentWithType(dom, GroupPostComponent);
    let commentField = React.findDOMNode(GPost.refs.commentField);
    let commentButton = React.findDOMNode(GPost.refs.commentButton);
    commentField.value = 'commenting is fun';
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.click(commentButton);

    expect(commentText).to.equal('commenting is fun');
  });
});
