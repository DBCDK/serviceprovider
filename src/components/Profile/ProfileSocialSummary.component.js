'use strict';

/**
 * @file
 * ProfileSocialSummary displays the users social statistics.
 */

import React from 'react';


const ProfileSocialSummary = React.createClass({
  render: function () {
    let followerCount = this.props.followerCount;
    let followingCount = this.props.followingCount;
    let groupsCount = this.props.groupsCount;
    return (
      <div className={'profile--socialsummary'}>
        <div className='row'>
          <div className='small-4 columns'><h6>Følger</h6>

            <p>{followerCount}</p></div>
          <div className='small-4 columns'><h6>Grupper</h6>

            <p>{groupsCount}</p></div>
          <div className='small-4 columns'><h6>Følgere</h6>

            <p>{followingCount}</p></div>
        </div>
      </div>
    );
  }
});

export default ProfileSocialSummary;
