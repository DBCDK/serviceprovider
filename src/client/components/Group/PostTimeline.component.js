'use strict';

/**
 * @file Write a short description here.
 */

import React from 'react';
import {curry, sortByOrder} from 'lodash';

import GroupPost from './Post/GroupPost.component.js';


class PostTimeline extends React.Component {

  constructor() {
    super();
  }

  render() {
    const props = this.props;

    const sortedPosts = sortByOrder(props.posts, ['timeCreated'], ['desc']);

    const posts = sortedPosts.map(function(post) {
      let curriedCb = curry(props.commentCb);
      return (
        <li key={post.id}>
          <GroupPost
            commentCb={curriedCb(post.id)}
            enableBackButton={false}
            groupId={props.groupId}
            groupPostData={post}
            groupPostId={post.id}
            loggedIn={props.loggedIn} // eslint-disable-line react/jsx-boolean-value
            />
        </li>
      );
    });

    return (
      <ul className='group--post-list'>
        {posts}
      </ul>
    );
  }
}

PostTimeline.displayName = 'PostTimeline.component';

export default PostTimeline;
