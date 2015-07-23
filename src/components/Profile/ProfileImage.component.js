/**
 * Created by matias on 22-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */

import React from 'react';


const ProfileImage = React.createClass({
  render: function () {
    let url = this.props.url;
    return (
      <img src={url} className={"profile--image"}></img>
    );
  }
});

export default ProfileImage;
