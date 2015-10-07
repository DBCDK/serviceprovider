'use strict';

import React, {PropTypes} from 'react';

class CommentComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="row">
        <div className="large-1 medium-2 hide-for-small-only columns"><img src={this.props.ownerImageUrl} /> <p></p></div>
        <div className="large-11 medium-10 small-12 columns"><p><strong>{this.props.ownerEmail}:</strong> {this.props.commentContent}</p></div>
        <hr />
      </div>
    );
  }
}

CommentComponent.displayName = 'Comment.component';
CommentComponent.propTypes = {
  commentContent: PropTypes.string.isRequired,
  ownerEmail: PropTypes.string.isRequired,
  ownerImageUrl: PropTypes.string.isRequired
};

export default CommentComponent;
