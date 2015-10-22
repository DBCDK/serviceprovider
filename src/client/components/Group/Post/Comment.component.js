'use strict';

import React, {PropTypes} from 'react';
import {timeSince} from '../../../../utils/Time.util.js';

class CommentComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const timeSinceCreated = timeSince(this.props.timeCreated);

    return (
      <div className="row group--comment">
        <div className="large-2 medium-4 hide-for-small-only columns">
          <img className='group--member-image' src={this.props.ownerImageUrl}/>
        </div>
        <div className="large-22 medium-20 small-24 columns">
          <div><strong>{this.props.ownerEmail}:</strong> {this.props.commentContent}</div>
          <span className='group--timesince'>{timeSinceCreated}</span>
        </div>
      </div>
    );
  }
}

CommentComponent.displayName = 'Comment.component';
CommentComponent.propTypes = {
  commentContent: PropTypes.string.isRequired,
  ownerEmail: PropTypes.string.isRequired,
  ownerImageUrl: PropTypes.string.isRequired,
  timeCreated: PropTypes.string.isRequired
};

export default CommentComponent;
