'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';

class Comment extends React.Component {
  static displayName() {
    return 'Comment.component';
  }

  static propTypes() {
    return {
      text: PropTypes.string.isRequired,
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
      <div className='small-12'>
        <img className='small-1 group--member-image' src={this.props.authorImageUrl}/>
        <span className='small-11'>{this.props.text}</span>
      </div>
    );
  }
}

export default Comment;
