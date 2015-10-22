'use strict';

import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';

class CommentFormComponent extends React.Component {

  constructor() {
    super();
  }

  sendComment() {
    const commentText = ReactDom.findDOMNode(this.refs.commentField).value.trim();
    if (this.props.loggedIn && commentText !== '' && this.props.commentCb) {
      this.props.commentCb(commentText);
    }
  }

  render() {
    const loggedIn = this.props.loggedIn;

    return (
      <div className='row'>
        <div className='large-20 medium-20 small-20 column'>
          <label>Skriv kommentar</label>
          <input
            disabled={loggedIn ? false : 'disabled'}
            id='commentField'
            placeholder='Skriv din kommentar her'
            ref='commentField'
            type='text'
            />
        </div>
        <div className='large-4 medium-4 small-4 column'>
          <a className='button tiny' id='commentButton' onClick={this.sendComment.bind(this)} ref='commentButton'>Indsend</a>
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
