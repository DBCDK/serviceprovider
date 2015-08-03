/**
 * Created by matias on 27-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */

import React from 'react';


const Image = React.createClass({

  propTypes: function () {
    return {
      url: React.PropTypes.string
    };
  },

  render: function () {
    let url = this.props.url;
    return (
      <img src={url} className={"profile--image-round"}></img>
    );
  }
});

export default Image;
