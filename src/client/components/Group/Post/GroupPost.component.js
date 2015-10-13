'use strict';

import React, {PropTypes} from 'react';
import CommentForm from './CommentForm.component.js';
import CommentsContainer from './CommentsContainer.component.js';
import {timeSince} from '../../../../utils/Time.util.js';

class GroupPostComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const comments = <CommentsContainer comments={this.props.groupPostData.comments ? this.props.groupPostData.comments : []} />;
    const commentForm = <CommentForm commentCb={this.props.commentCb} loggedIn={this.props.loggedIn} />;
    const backButton = <a className="button tiny" href={'/groups/' + this.props.groupId}>Tilbage til gruppen!</a>;

    const dateString = this.props.groupPostData.timeCreated;
    const timeSinceString = timeSince(dateString);

    let ownerImage = null;
    if (typeof this.props.ownerImageUrl !== 'undefined') {
      ownerImage = (<img
        className='small-2 column group--member-image'
        src={this.props.ownerImageUrl}
        />);
    }

    return (
      <div className='group--post'>
        <div className='row'>
          {this.props.enableBackButton ? backButton : null}
          {ownerImage}
          <span className='small-7 column'><strong>{this.props.ownerName}</strong></span>
          <span className='small-3 column group--timesince'>Skrevet for {timeSinceString} siden</span>
        </div>
        <div className='row'>
          <p>{this.props.groupPostData.content}</p>
          <div>
            {comments}
            {commentForm}
          </div>
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
  loggedIn: PropTypes.bool,
  ownerImageUrl: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired
};

export default GroupPostComponent;
