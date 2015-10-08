'use strict';

import React, {PropTypes} from 'react';

import GroupCoverImage from './GroupCoverImage.component.js';
import MemberSummary from './MemberSummary.component.js';
import PostTimeline from './PostTimeline.component.js';


class Group extends React.Component {
  static displayName() {
    return 'Group.component';
  }

  static propTypes() {
    return {
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posts: PropTypes.array.isRequired,
      members: PropTypes.array.isRequired,
      commentCb: PropTypes.func.isRequired,
      groupId: PropTypes.number.isRequired
    };
  }

  constructor() {
    super();
  }

  render() {
    const coverUrl = 'http://www.nalder.com.au/galleries/Limited%20Edition%20Landscape/photos/The_Consequence_of_Drought.jpg';
    return (
      <div>
        <GroupCoverImage url={coverUrl}/>
        <MemberSummary members={this.props.members}/>
        <PostTimeline commentCb={this.props.commentCb} groupId={this.props.groupId} posts={this.props.posts}/>
      </div>
    );
  }
}

export default Group;
