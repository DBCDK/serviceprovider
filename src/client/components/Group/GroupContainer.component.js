'use strict';

import React from 'react';
import Group from './Group.component.js';
import GroupCreator from './GroupCreator.component.js';
import GroupActions from '../../actions/Group.action.js';
import GroupStore from '../../stores/Group.store.js';

class GroupContainer extends React.Component {
  static displayName() {
    return 'GroupContainer.component';
  }

  constructor() {
    super();

    this.onUpdateGroup = this.onUpdateGroup.bind(this);

    this.state = {
      name: '',
      description: '',
      posts: [],
      members: [],
      groupId: null
    };

    GroupStore.listen(this.onUpdateGroup);
    // fetch the current group
    const groupId = window.QUERYSTRING_PROPS;
    GroupActions.fetchGroup({id: groupId});
  }

  componentWillUnmount() {
    GroupStore.unlisten(this.onUpdateGroup);
  }

  create(group) {
    GroupActions.createGroup(group);
  }

  createComment(postId, comment) {
    GroupActions.createComment({
      postId: postId,
      commentText: comment
    });
  }

  onUpdateGroup(store) {
    this.setState(store.group);
  }

  render() {
    const createMode = typeof window.QUERYSTRING_PROPS === 'undefined';
    const props = this.state;
    props.commentCb = this.createComment;
    const content = (createMode) ? <GroupCreator onCreate={this.create}/> : <Group {...props} />;
    return (<div>{content}</div>);
  }
}

export default GroupContainer;
