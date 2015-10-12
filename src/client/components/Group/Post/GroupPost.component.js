'use strict';

import React, {PropTypes} from 'react';
import CommentForm from './CommentForm.component.js';
import CommentsContainer from './CommentsContainer.component.js';

class GroupPostComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const comments = <CommentsContainer comments={this.props.groupPostData.comments ? this.props.groupPostData.comments : []} />;
    const commentForm = <CommentForm commentCb={this.props.commentCb} loggedIn={this.props.loggedIn} />;
    const backButton = <a className="button tiny" href={'/groups/' + this.props.groupId}>Tilbage til gruppen!</a>;

    return (
      <div>
      <div className='row'>
        {this.props.enableBackButton ? backButton : null}
        <p>{this.props.groupPostData.content}</p>
        <div>
          {comments}
          {commentForm}
        </div>
        <p><small>Group: {this.props.groupId}, Post: {this.props.groupPostId}</small></p>
      </div>
      </div>
    );
  }
}

GroupPostComponent.displayName = 'GroupPost.component';
GroupPostComponent.propTypes = {
  commentCb: PropTypes.func,
  enableBackButton: PropTypes.bool.isRequired,
  groupId: PropTypes.number.isRequired,
  groupPostData: PropTypes.object.isRequired,
  groupPostId: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool
};

export default GroupPostComponent;
