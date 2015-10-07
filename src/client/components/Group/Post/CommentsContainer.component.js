'use strict';

import React, {PropTypes} from 'react';
import Comment from './Comment.component.js';
import {isEmpty} from 'lodash';

class CommentsContainerComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const comments = !(isEmpty(this.props.comments)) ? this.props.comments.map((val) => {
      return (
        <Comment
          commentContent={val.content}
          key={val.id}
          ownerEmail={val.owner.email}
          ownerImageUrl={val.owner.imageUrl ? val.owner.imageUrl : '/dummy.jpg'}
          />
      );
    }) : (<div className='noComments' />);

    return (
      <div>
        <h4>{comments.length} Kommentarer</h4>
        <hr />
        {comments}
      </div>
    );
  }
}

CommentsContainerComponent.displayName = 'CommentsContainer.component';
CommentsContainerComponent.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsContainerComponent;
