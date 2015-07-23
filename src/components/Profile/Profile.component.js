/**
 * Created by matias on 22-07-15.
 */

'use strict';
/**
 * @file
 * Comment
 */
import React from 'react';
import ProfileImage from './ProfileImage.component.js';
import ProfileAttribute from './ProfileAttribute.component.js';
import ProfileHeader from './ProfileHeader.component.js';
import ProfileSocialSummary from './ProfileSocialSummary.component.js';


const dummyProfile = {
  name: 'I-Love-Ponys',
  imageUrl: 'http://www.saintsfc.co.uk/images/common/bg_player_profile_default_big.png',
  followingCount: 16,
  groupsCount: 7,
  followersCount: 35
};

const Profile = React.createClass({
  render: function () {
    let profile = dummyProfile;
    let groupsCount = profile.groupsCount;
    let followingCount = profile.followingCount;
    let followersCount = profile.followersCount;
    return (
      <div>
        <ProfileHeader/>
        <ProfileImage url={profile.imageUrl}/>
        <ProfileAttribute name='Name' type='string' value={profile.name} editable={false}/>
        <ProfileSocialSummary followerCount={followersCount} followingCount={followingCount}
                              groupsCount={groupsCount}/>
      </div>
    );
  }
});

export default Profile;
