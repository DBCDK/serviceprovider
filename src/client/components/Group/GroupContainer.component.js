'use strict';

import React from 'react';
import Group from './Group.component.js';
import GroupCreator from './GroupCreator.component.js';
import PostCreator from './PostCreator.component.js';
import GroupActions from '../../actions/Group.action.js';
import GroupStore from '../../stores/Group.store.js';

class GroupContainer extends React.Component {
  static displayName() {
    return 'GroupContainer.component';
  }

  constructor() {
    super();

    this.onUpdateGroup = this.onUpdateGroup.bind(this);
    this.createPost = this.createPost.bind(this);

    this.state = {
      name: '',
      description: '',
      posts: [],
      members: [],
      id: null,
      loggedIn: false,
      createPostMode: false
    };

    GroupStore.listen(this.onUpdateGroup);
    // fetch the current group
    const groupId = window.QUERYSTRING_PROPS;
    GroupActions.fetchGroup({id: groupId});
  }

  componentWillUnmount() {
    GroupStore.unlisten(this.onUpdateGroup);
  }

  createGroup(group) {
    GroupActions.createGroup(group);
  }

  createPost(post) {
    const newPost = {
      title: 'no title',
      content: post.content,
      groupId: this.state.id
    };
    GroupActions.createPost(newPost);
  }

  createComment(postId, comment) {
    GroupActions.createComment({
      postId: postId,
      commentText: comment
    });
  }

  toggleCreatePostMode() {
    GroupActions.toggleCreatePostMode();
  }

  onUpdateGroup(store) {
    this.setState(store.group);
  }

  render() {
    const props = this.state;
    props.commentCb = this.createComment;
    props.toggleCreatePostCb = this.toggleCreatePostMode;

    const createGroupMode = typeof window.QUERYSTRING_PROPS === 'undefined';
    const createPostMode = props.createPostMode;

    let content = null;
    if (createGroupMode) {
      props.onCreate = this.createGroup;
      content = <GroupCreator {...props} />;
    }
    else if (createPostMode) {
      props.onCreate = this.createPost;
      content = <PostCreator {...props} />;
    }
    else {
      content = <Group {...props} />;
    }

    return (<div>{content}</div>);
  }
}

export default GroupContainer;
