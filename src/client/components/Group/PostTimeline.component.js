'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';
import {curry} from 'lodash';

import GroupPost from './Post/GroupPost.component.js';


class PostTimeline extends React.Component {

  constructor() {
    super();
  }

  render() {
    const props = this.props;

    const posts = props.posts.map(function(post) {
      let curriedCb = curry(props.commentCb);
      return (
        <li key={post.id}>
          <GroupPost
            commentCb={curriedCb(post.id)}
            enableBackButton={false}
            groupId={props.groupId}
            groupPostData={post}
            groupPostId={post.id}
            loggedIn={true} // eslint-disable-line react/jsx-boolean-value
            />
        </li>
      );
    })

    return (
      <ul className='group--post-list'>
        {posts}
      </ul>
    );
  }
}

PostTimeline.displayName = 'PostTimeline.component';

export default PostTimeline;
