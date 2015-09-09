'use strict';

/**
 * @file
 * Profile component displays the user attributes and allows editing.
 */

import React from 'react';
import Reflux from 'reflux';

import ProfileImage from './ProfileImage.component.js';
import ProfileAttribute from './ProfileAttribute.component.js';
import ProfileHeader from './ProfileHeader.component.js';
import ProfileLibraries from './ProfileLibraries.component.js';

import ProfileStore from '../../stores/Profile.store.js';
import ProfileActions from '../../actions/Profile.action.js';

const Profile = React.createClass({

  displayName: 'ReactProfile',

  mixins: [
    Reflux.connect(ProfileStore, 'profile')
  ],

  render: function() {
    const profile = this.state.profile;
    const editable = profile.editEnabled;
    return (
      <div>
        <ProfileHeader editable={editable} ref='header' />
        <ProfileImage editable={editable} url={this.state.profile.imageUrl} />
        <ProfileAttribute editable={editable} name='Email' type='string' value={this.state.profile.name} />
        <ProfileLibraries
          actions={ProfileActions}
          addLibraryLabel={'Tilføj bibliotek'}
          editable={editable}
          libraries={this.state.profile.favoriteLibraries}
          pickupLocationText={'afhentningssted'}
          placeholder={'Låner ID'}
          setAsText={'Vælg som'}
          store={this.state.profile}
          />
      </div>
    );
  }
});

export default Profile;
