'use strict';

import React, {PropTypes} from 'react';

class GroupPostComponent extends React.Component {
  sendComment() {
    return () => {
      const commentText = document.getElementById('commentField').value.trim();
      if (this.props.loggedIn && commentText !== '' && this.props.commentCb) {
        this.props.commentCb(commentText);
      }
    };
  }

  render() {
    let comments = this.props.groupPostData.comments ? this.props.groupPostData.comments.map((val) => {
      return (
        <div className="row" key={val.id}>
          <div className="large-1 medium-2 hide-for-small-only columns"><img src={val.owner.imageUrl ? val.owner.imageUrl : '/dummy.jpg'} /> <p></p></div>
          <div className="large-11 medium-10 small-12 columns"><p><strong>{val.owner.email}:</strong> {val.content}</p></div>
          <hr />
        </div>);
    }) : [];

    return (
      <div className='row'>
        <a className="button tiny" href={'/groups/' + this.props.groupId}>Tilbage til gruppen!</a>
        <h1>{this.props.groupPostData.title}</h1>
        <p>{this.props.groupPostData.content}</p>
        <div>
          <h4>{comments.length} Kommentarer</h4>
          <hr />
          {comments}
          <div className='row'>
            <div className='large-10 medium-10 small-10 columns'>
              <label>Indsend kommentar
                <input id='commentField' placeholder='Skriv din kommentar her' type='text' />
              </label>
            </div>
            <div className='large-2 medium-2 small-2 columns'>
              <a className='button' onClick={this.sendComment()}>Indsend!</a>
            </div>
          </div>
        </div>
        <p><small>Group: {this.props.groupId}, Post: {this.props.groupPostId}</small></p>
      </div>
    );
  }
}

GroupPostComponent.displayName = 'GroupPost.component';
GroupPostComponent.propTypes = {
  commentCb: PropTypes.func,
  groupId: PropTypes.number.isRequired,
  groupPostData: PropTypes.object.isRequired,
  groupPostId: PropTypes.number.isRequired,
  loggedIn: PropTypes.bool
};

export default GroupPostComponent;
