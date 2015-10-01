'use strict';

import React, {PropTypes} from 'react';

class GroupPostComponent extends React.Component {
  render() {
    let comments = this.props.groupPostData.comments ? this.props.groupPostData.comments.map((val) => {
      return (
        <div className="row">
          <div className="large-1 medium-2 small-2 columns"><img src={val.owner.imageUrl} /> <p></p></div>
          <div className="large-11 medium-10 small-10 columns"><p><strong>{val.owner.email}:</strong> {val.content}</p></div>
          <hr />
        </div>);
    }) : [];

    return (
      <div className='row'>
        <h1>{this.props.groupPostData.title}</h1>
        <p>{this.props.groupPostData.content}</p>
        <div>
          <h4>Kommentarer</h4>
          <hr />
          {comments}
        </div>
        <p><small>Group: {this.props.groupId}, Post: {this.props.groupPostId}</small></p>
      </div>
    );
  }
}

GroupPostComponent.displayName = 'GroupPost.component';
GroupPostComponent.propTypes = {
  groupId: PropTypes.number.isRequired,
  groupPostData: PropTypes.object.isRequired,
  groupPostId: PropTypes.number.isRequired
};

export default GroupPostComponent;
