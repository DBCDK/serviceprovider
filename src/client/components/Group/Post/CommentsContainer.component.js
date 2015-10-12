'use strict';

import React, {PropTypes} from 'react';
import Comment from './Comment.component.js';
import {isEmpty, takeRight} from 'lodash';

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

    const visibleCommentsMax = 2;

    const expandButtonText = this.state.isExpanded ? 'Se flere kommentarer' : 'Vis færre kommentarer';

    const allComments = this.props.comments;

    const visibleComments = this.state.isExpanded ? takeRight(allComments, visibleCommentsMax) : allComments;

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

    const hasComments = allComments.length > 0;
    let header = <div></div>;

    let expandButton;// <button className='tiny' onClick={this.toggleExpand}>{expandButtonText}</button>;

    if (allComments.length > visibleCommentsMax) {
      expandButton = <button className='tiny' onClick={this.toggleExpand}>{expandButtonText}</button>;
    }


    if (hasComments) {
      header = (
        <div>
          <h6>{allComments.length} Kommentarer</h6>
          {expandButton}
          <hr />
        </div>
      );
    }

    return (
      <div>
        {header}
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
