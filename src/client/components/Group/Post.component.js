'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';

import CommentList from './CommentList.component.js';


class Post extends React.Component {
  static displayName() {
    return 'Post.component';
  }

  static propTypes() {
    return {
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired,
      imageUrl: PropTypes.string,
      authorName: PropTypes.string.isRequired,
      authorImageUrl: PropTypes.string.isRequired,
      timeCreated: PropTypes.number.isRequired
    };
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div className='row'>
        <div>
          <img src={this.props.authorImageUrl || '/dummy.jpg'} className='small-2 group--member-image' />
          <span className='small-8 group--post-author'>{this.props.authorName}</span>
          <span className='small-2 group--post-time'>{this.props.timeCreated}</span>
        </div>
        <div className='group--post-content small-12'>
          <h4>{this.props.title}</h4>
          <p>{this.props.text}</p>
          <CommentList comments={this.props.comments}></CommentList>
        </div>
      </div>
    );
  }
}

export default Post;
