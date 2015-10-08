'use strict';

import React, {PropTypes} from 'react';
import Comment from './Comment.component.js';
import {isEmpty, take} from 'lodash';

class CommentsContainerComponent extends React.Component {
  constructor() {
    super();
    this.toggleExpand = this.toggleExpand.bind(this);
    this.state = {isExpanded: true};
  }

  toggleExpand() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  render() {

    const expandButtonText = this.state.isExpanded ? 'Se flere kommentarer' : 'Vis færre kommentarer';

    const allComments = this.props.comments;

    const visibleComments = this.state.isExpanded ? take(allComments, 2) : allComments;

    const comments = !(isEmpty(visibleComments)) ? visibleComments.map((val) => {
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
        <h4>{allComments.length} Kommentarer</h4>
        <button className='tiny' onClick={this.toggleExpand}>{expandButtonText}</button>
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
