'use strict';

import {expect} from 'chai';
import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {groupPost, groupPostManyComments} from './GroupPost.mock.js';

import GroupPostStore from '../../../stores/GroupPost.store.js';
import ProfileStore from '../../../stores/Profile.store.js';

import GroupPostActions from '../../../actions/GroupPost.action.js';

import GroupPostContainer from '../Post/GroupPostContainer.component.js';
import GroupPostComponent from '../Post/GroupPost.component.js';
import CommentForm from '../Post/CommentForm.component.js';
import Comment from '../Post/Comment.component.js';

describe('Test the group post components', () => {
  it('Create GroupPostContainer without data', () => {
    let element = React.createElement(GroupPostContainer, {groupPostData: {}});
    let dom = TestUtils.renderIntoDocument(element);
    ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent));
  });

  it('Create GroupPostContainer with props', () => {
    let element = React.createElement(GroupPostContainer, {
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });
    let dom = TestUtils.renderIntoDocument(element);
    let GPost = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent));
    expect(GPost.innerHTML).to.contain('Dette er en kommentar');
  });

  it('Create GroupPostContainer with props and data in state', () => {
    let element = React.createElement(GroupPostContainer, {
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });

    let dom = TestUtils.renderIntoDocument(element);

    GroupPostStore.fetchGroupPostResponse(groupPost.groupPostData);

    let GPost = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent));
    expect(GPost.innerHTML).to.contain('Dette er en kommentar');
  });

  it('Create GroupPostContainer with props and data in state, and logged in user, send comment to check action is called', () => {
    let sandbox = sinon.sandbox.create(); // eslint-disable-line
    sandbox.spy(GroupPostActions, 'commentsUpdated');
    sandbox.spy(GroupPostActions, 'fetchGroupPost');

    let mock = sinon.mock(ProfileStore); // eslint-disable-line
    mock.expects('getInitialState').returns({userIsLoggedIn: true});

    let element = React.createElement(GroupPostContainer, {
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });

    let dom = TestUtils.renderIntoDocument(element);
    let GPost = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostContainer));
    expect(GPost.innerHTML).to.contain('Dette er en kommentar');

    dom.state.profile.userIsLoggedIn = true;

    let CForm = TestUtils.findRenderedComponentWithType(dom, CommentForm);
    let commentField = ReactDom.findDOMNode(CForm.refs.commentField);
    let commentButton = ReactDom.findDOMNode(CForm.refs.commentButton);

    commentField.value = 'kommentaren som skal sendes';
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.click(commentButton);

    expect(GroupPostActions.commentsUpdated.calledWith({
      postId: groupPost.groupPostId,
      commentText: 'kommentaren som skal sendes'
    })).to.equal(true);

    GroupPostStore.commentsUpdatedResponse();
    expect(GroupPostActions.fetchGroupPost.calledWith(groupPost.groupId)).to.equal(true);

    sandbox.restore();
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
    let GPost = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent));
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
    let CForm = TestUtils.findRenderedComponentWithType(dom, CommentForm);
    let commentField = ReactDom.findDOMNode(CForm.refs.commentField);
    let commentButton = ReactDom.findDOMNode(CForm.refs.commentButton);
    commentField.value = 'commenting is fun';
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.click(commentButton);

    expect(commentText).to.equal('commenting is fun');
  });

  it('create GroupPost and comment on it', () => {
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
    let CForm = TestUtils.findRenderedComponentWithType(dom, CommentForm);
    let commentField = ReactDom.findDOMNode(CForm.refs.commentField);
    let commentButton = ReactDom.findDOMNode(CForm.refs.commentButton);
    commentField.value = '';
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.click(commentButton);

    expect(commentText).to.equal('');
  });

  it('create GroupPost and comment on it whilst not logged in', () => {
    let commentText = '';

    let element = React.createElement(GroupPostComponent, {
      loggedIn: false,
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId,
      commentCb: (text) => {
        commentText = text;
      }
    });

    let dom = TestUtils.renderIntoDocument(element);
    let CForm = TestUtils.findRenderedComponentWithType(dom, CommentForm);
    let commentField = ReactDom.findDOMNode(CForm.refs.commentField);
    let commentButton = ReactDom.findDOMNode(CForm.refs.commentButton);
    commentField.value = 'per er sej';
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.click(commentButton);

    expect(commentText).to.equal('');
  });

  it('Create GroupPost and comment on it without a commentcb', () => {
    let commentText = '';

    let element = React.createElement(GroupPostComponent, {
      loggedIn: true,
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });

    let dom = TestUtils.renderIntoDocument(element);
    let CForm = TestUtils.findRenderedComponentWithType(dom, CommentForm);
    let commentField = ReactDom.findDOMNode(CForm.refs.commentField);
    let commentButton = ReactDom.findDOMNode(CForm.refs.commentButton);
    commentField.value = 'this comment won\'t display';
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.click(commentButton);

    expect(commentText).to.equal('');
  });

  it('Create grouppost with grouppost data (Test componentWillUnmount)', () => {
    let element = React.createElement(GroupPostContainer, {
      groupPostData: groupPost.groupPostData
    });

    let dom = TestUtils.renderIntoDocument(element);
    const parentNode = ReactDom.findDOMNode(TestUtils.findRenderedComponentWithType(dom, GroupPostComponent)).parentNode;
    ReactDom.unmountComponentAtNode(parentNode);
  });

  it('should test comment is sent when enter is pressed', () => {
    let commentText = '';

    let element = React.createElement(GroupPostComponent, {
      loggedIn: true,
      groupId: groupPost.groupId,
      groupPostData: groupPost.groupPostData,
      groupPostId: groupPost.groupPostId
    });

    let dom = TestUtils.renderIntoDocument(element);
    let CForm = TestUtils.findRenderedComponentWithType(dom, CommentForm);
    let commentField = ReactDom.findDOMNode(CForm.refs.commentField);
    commentField.value = 'this comment won\'t display';
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.keyPress(commentField, {key: 'Enter', keyCode: 13, which: 13});
    TestUtils.Simulate.change(commentField);
    TestUtils.Simulate.keyPress(commentField, {key: 'y', keyCode: 89, which: 89});
    TestUtils.Simulate.change(commentField);

    expect(commentText).to.equal('');
  });

  it('should test expansion of comments', () => {
    let element = React.createElement(GroupPostComponent, {
      loggedIn: true,
      groupId: groupPostManyComments.groupId,
      groupPostData: groupPostManyComments.groupPostData,
      groupPostId: groupPostManyComments.groupPostId
    });

    let dom = TestUtils.renderIntoDocument(element);

    // Before expansion
    let comments = TestUtils.scryRenderedComponentsWithType(dom, Comment);
    expect(comments.length).to.equal(2);

    let commentsExpandButton = ReactDom.findDOMNode(TestUtils.findRenderedDOMComponentWithClass(dom, 'group--post--comments-container--expand-button'));
    TestUtils.Simulate.click(commentsExpandButton);

    // After expansion
    comments = TestUtils.scryRenderedComponentsWithType(dom, Comment);
    expect(comments.length).to.equal(6);
  });
});
