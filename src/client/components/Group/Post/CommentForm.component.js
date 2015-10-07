'use strict';

import React, {PropTypes} from 'react';

class CommentFormComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  sendComment() {
    const commentText = React.findDOMNode(this.refs.commentField).value.trim();
    if (this.props.loggedIn && commentText !== '' && this.props.commentCb) {
      this.props.commentCb(commentText);
    }
  }

  render() {
    return (
      <div>
      <div className='row'>
        <div className='large-10 medium-10 small-10 columns'>
          <label>Indsend kommentar
            <input id='commentField' placeholder='Skriv din kommentar her' ref='commentField' type='text' />
          </label>
        </div>
        <div className='large-2 medium-2 small-2 columns'>
          <a className='button' id='commentButton' onClick={this.sendComment.bind(this)} ref='commentButton'>Indsend!</a>
        </div>
      </div>
      </div>
    );
  }
}

CommentFormComponent.displayName = 'CommentForm.component';
CommentFormComponent.propTypes = {
  commentCb: PropTypes.func,
  loggedIn: PropTypes.bool
};

export default CommentFormComponent;
