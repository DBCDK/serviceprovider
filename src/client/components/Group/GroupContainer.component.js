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
      loggedIn: false,
      createPostMode: false,
      editGroupMode: false,
      isOwner: false
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

  updateGroup(group) {
    GroupActions.updateGroup(group);
  }

  saveGroup(group) {
    GroupActions.saveGroup(group);
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

  toggleEditGroupMode() {
    GroupActions.toggleEditGroupMode();
  }

  onUpdateGroup(store) {
    this.setState(store.group);
  }

  render() {
    const props = this.state;
    props.commentCb = this.createComment;
    props.toggleCreatePostCb = this.toggleCreatePostMode;
    props.toggleEditGroupCb = this.toggleEditGroupMode;

    const createGroupMode = typeof window.QUERYSTRING_PROPS === 'undefined';
    const createPostMode = props.createPostMode;

    let content = null;

    if (createGroupMode || props.editGroupMode) {
      props.onCreate = this.createGroup;
      props.onSave = this.saveGroup;
      content = <GroupCreator {...props} />;
    }
    else if (createPostMode) {
      props.onCreate = this.createPost;
      content = <PostCreator {...props} />;
    }
    else if (typeof props.id === 'undefined') {
      content = <div className='row'></div>;
    }
    else {
      content = <Group {...props} />;
    }

    return (<div>{content}</div>);
  }
}

export default GroupContainer;
