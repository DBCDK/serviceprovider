'use strict';

/**
 * @file
 * Profile component displays the user attributes and allows editing.
 */

import React from 'react';
import ProfileImage from './ProfileImage.component.js';
import ProfileAttribute from './ProfileAttribute.component.js';
import ProfileHeader from './ProfileHeader.component.js';
import ProfileSocialSummary from './ProfileSocialSummary.component.js';

import ProfileStore from '../../stores/Profile.store.js';


const Profile = React.createClass({

  displayName: function() {
    return 'ReactProfile';
  },

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
        <ProfileHeader editable={editable} ref='header'/>
        <ProfileImage editable={editable} url={profile.imageUrl} />
        <ProfileAttribute editable={editable} name='Name' type='string' value={profile.name}/>
        <ProfileSocialSummary followerCount={followersCount} followingCount={followingCount}
                              groupsCount={groupsCount} />
      </div>
    );
  }
});

export default Profile;
