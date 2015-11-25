'use strict';

/**
 * @file
 * Displays an image based on the given URL (string)
 */

import React from 'react';

var CoverImage = React.createClass({
  displayName: 'CoverImage',
  propTypes: {
    imgurl: React.PropTypes.string.isRequired
  },

  render() {
    return <img className={'cover-image'} src={this.props.imgurl} />;
  }
});

export default CoverImage;
