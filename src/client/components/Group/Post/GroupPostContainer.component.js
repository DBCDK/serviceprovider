'use strict';

import React, {PropTypes} from 'react';
import {isEmpty} from 'lodash';

// Components
import GroupPostComponent from './GroupPost.component.js';

// Stores
import ProfileStore from '../../../stores/Profile.store.js';
import GroupPostStore from '../../../stores/GroupPost.store.js';

// Actions
import GroupPostActions from '../../../actions/GroupPost.action.js';

class GroupPostContainerComponent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      profile: ProfileStore.getInitialState(),
      groupPost: GroupPostStore.getInitialState()
    };

    this.unsubscribe = [
      ProfileStore.listen(() => this.setState({
        profile: ProfileStore.getProfile()
      })),
      GroupPostStore.listen(() => this.setState({
        groupPost: GroupPostStore.store
      }))
    ];
  }

  componentWillMount() {
    this.state.groupPost.data = isEmpty(this.state.groupPost.data) ? this.props.groupPostData : this.state.groupPost.data;
  }

  componentDidMount() {
    GroupPostActions.fetchGroupPost(this.props.groupPostId);
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  commentOnGroupPost() {
    return (commentText) => {
      GroupPostActions.commentsUpdated({
        postId: this.state.groupPost.data.id,
        commentText: commentText
      });
    };
  }

  render() {
    const enableBackButton = true;
    return (
      <GroupPostComponent
        commentCb={this.commentOnGroupPost()}
        enableBackButton={enableBackButton}
        groupId={this.props.groupId}
        groupPostData={this.state.groupPost.data}
        groupPostId={this.props.groupPostId}
        loggedIn={this.state.profile.userIsLoggedIn} />
    );
  }
}

GroupPostContainerComponent.displayName = 'GroupPostContainer.component';
GroupPostContainerComponent.propTypes = {
  groupId: PropTypes.number.isRequired,
  groupPostData: PropTypes.object.isRequired,
  groupPostId: PropTypes.number.isRequired
};

export default GroupPostContainerComponent;
