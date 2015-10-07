'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';

import Post from './Post.component.js';


class PostTimeline extends React.Component {
  static displayName() {
    return 'PostTimeline.component';
  }

  static propTypes() {
    return {
      posts: PropTypes.array.isRequired
    };
  }

  constructor() {
    super();
  }

  render() {
    return (
      <ul className='group--post-list'>
        {this.props.posts.map(function(post) {
          return (
            <li key={post.id}>
              <Post
                authorImageUrl={post.owner.imageUrl}
                authorName={post.owner.email}
                comments={post.comments}
                text={post.content}
                timeCreated={post.timeCreated}
                title={post.title}
                />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default PostTimeline;
