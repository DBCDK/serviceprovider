'use strict';

/**
 * @file
 * Simple component that displays one of two images based on the given isToggled property
 */
import React from 'react';

const ImageSwitchComponent = React.createClass({
  displayName: 'ImageSwitchComponent',

  propTypes: {
    isToggled: React.PropTypes.bool,
    offStateImg: React.PropTypes.string.isRequired,
    onStateImg: React.PropTypes.string.isRequired
  },

  render() {
    const imageUrl = this.props.isToggled ? this.props.onStateImg : this.props.offStateImg;
    return <img className='image-switch-container' src={imageUrl} />;
  }
});

export default ImageSwitchComponent;
