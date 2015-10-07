'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';

import Comment from './Comment.component.js';

class CommentList extends React.Component {
  static displayName() {
    return 'CommentList.component';
  }

  static propTypes() {
    return {
      comments: PropTypes.array.isRequired
    };
  }

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h5>Kommentarer</h5>
        <ul>
          {this.props.comments.map(function (comment) {
            return (
              <li key={comment.id}>
                <Comment
                  text={comment.content}
                  authorName={'123'}
                  authorImageUrl={'/dummy.jpg'}
                  timeCreated={123123123222222}
                  />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
