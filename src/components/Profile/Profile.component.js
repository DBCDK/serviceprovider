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

import ProfileStore from '../../stores/Profile.store.js';


const Profile = React.createClass({

  getInitialState: function () {
    return {profile: ProfileStore.getProfile()};
  },

  componentDidMount: function () {
    ProfileStore.listen(this.updateProfile);
  },

  updateProfile: function (profile) {
    this.setState({profile: profile});
  },

  render: function () {
    let profile = this.state.profile;
    let editable = profile.editEnabled;
    let groupsCount = profile.groupsCount;
    let followingCount = profile.followingCount;
    let followersCount = profile.followersCount;
    return (
      <div>
        <ProfileHeader/>
        <ProfileImage url={profile.imageUrl}/>
        <ProfileAttribute name='Name' type='string' value={profile.name} editable={editable}/>
        <ProfileSocialSummary followerCount={followersCount} followingCount={followingCount}
                              groupsCount={groupsCount}/>
      </div>
    );
  }
});

export default Profile;
