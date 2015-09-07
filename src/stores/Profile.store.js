'use strict';

/**
 * @file
 * Profile Store
 */
import {contains} from 'lodash';

import Reflux from 'reflux';
import ProfileActions from '../actions/Profile.action.js';

let _profile = {
  name: 'I-Love-Ponys',
  imageUrl: '/dummy.jpg',
  followingCount: 16,
  groupsCount: 7,
  followersCount: 35,
  editEnabled: false,
  favoriteLibraries: []
};

let profileStore = Reflux.createStore({
  listenables: [ProfileActions],

  init: function () {
    ProfileActions.fetchProfile();
  },

  onToggleEdit: function () {
    _profile.editEnabled = !_profile.editEnabled;
    // edit mode was disabled
    if (!_profile.editEnabled) {
      ProfileActions.saveProfile(_profile);
    }
    this.trigger(_profile);
  },

  onUpdateProfile: function (profile) {
    for (let attr in profile) {
      if (profile.hasOwnProperty(attr)) {
        _profile[attr] = profile[attr];
      }
    }
    this.trigger(_profile);
  },

  onConfirmSaveProfile: function (str) { // eslint-disable-line no-unused-vars
  },

  onSaveProfile: function (str) { // eslint-disable-line no-unused-vars
  },

  onFetchProfile: function (str) { // eslint-disable-line no-unused-vars
  },

  onUpdateAttribute: function (str) {
    _profile.name = str;
    this.trigger(_profile);
  },

  getProfile: function () {
    return _profile;
  },

  onAddLibraryToFavorites: function(agencyID) {
    if (!_profile.favoriteLibraries) {
      _profile.favoriteLibraries = [agencyID];
    }
    else if (!contains(_profile.favoriteLibraries, agencyID)) {
      _profile.favoriteLibraries.push(agencyID);
    }

    ProfileActions.saveProfile({
      favoriteLibraries: _profile.favoriteLibraries
    });
  }

});

export default profileStore;
