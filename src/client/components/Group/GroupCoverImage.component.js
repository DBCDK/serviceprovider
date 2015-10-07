'use strict';

/**
 * @file Write a short description here.
 */

import React, {PropTypes} from 'react';

class GroupCoverImage extends React.Component {
  static displayName() {
    return 'GroupCoverImage.component';
  }

  static propTypes() {
    return {
      url: PropTypes.string.isRequired
    };
  }

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

export default GroupCoverImage;
