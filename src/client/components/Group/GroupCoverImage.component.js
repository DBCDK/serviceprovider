'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';

class GroupCoverImage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='row'>
        <img className='small-12' src={this.props.url}></img>
      </div>
    );
  }
}

GroupCoverImage.displayName = 'GroupCoverImage.component';
GroupCoverImage.propTypes = {
  url: PropTypes.string.isRequired
};

export default GroupCoverImage;
