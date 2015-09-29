'use strict';

/**
 * @file
 * A round image component
 */

import React from 'react';


const Image = React.createClass({

  displayName: function() {
    return 'ReactImage';
  },

  propTypes: function () {
    return {
      url: React.PropTypes.string
    };
  },

  render: function () {
    let url = (!this.props.url) ? '/dummy.jpg' : this.props.url;
    return (
      <img className={"profile--image-round"} src={url}></img>
    );
  }
});

export default Image;
