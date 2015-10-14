'use strict';

import React, {PropTypes} from 'react';

import GroupCoverImage from './GroupCoverImage.component.js';
import MemberSummary from './MemberSummary.component.js';
import PostTimeline from './PostTimeline.component.js';


class Group extends React.Component {

  constructor() {
    super();
  }

  render() {
    const coverUrl = 'http://www.nalder.com.au/galleries/Limited%20Edition%20Landscape/photos/The_Consequence_of_Drought.jpg';
    return (
      <div>
        <GroupCoverImage url={coverUrl}/>
        <MemberSummary members={this.props.members}/>
        <div className='row'>
          <button onClick={this.props.toggleCreatePostCb}>Skriv nyt indlæg</button>
          <button onClick={this.props.toggleEditGroupCb}>Rediger gruppe</button>
        </div>
        <PostTimeline
          commentCb={this.props.commentCb}
          groupId={this.props.id}
          loggedIn={this.props.loggedIn}
          posts={this.props.posts}/>
      </div>
    );
  }
}

Group.propTypes = {
  commentCb: PropTypes.func.isRequired,
  createPostMode: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  editGroupMode: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  members: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  toggleCreatePostCb: PropTypes.func.isRequired,
  toggleEditGroupCb: PropTypes.func.isRequired
};
Group.displayName = 'Group.component';

export default Group;
