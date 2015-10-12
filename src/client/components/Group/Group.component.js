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
      toggleCreatePostCb: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      loggedIn: PropTypes.boolean.isRequired,
      createPostMode: PropTypes.boolean.isRequired
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
        <div className='row'>
          <button onClick={this.props.toggleCreatePostCb}>Skriv nyt indlæg</button>
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

export default Group;
