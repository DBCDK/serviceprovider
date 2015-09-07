'use strict';

/**
 * @file
 * Profile Store
 */
import {findIndex} from 'lodash';

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

  getInitialState: function () {
    return _profile;
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

  onUpdateBorrowerIDForLibrary: function(agencyID, borrowerID) {
    const libraryIndex = findIndex(_profile.favoriteLibraries, 'agencyID', agencyID);
    if (agencyID >= 0) {
      _profile.favoriteLibraries[libraryIndex] = {
        agencyID: agencyID,
        borrowerID: borrowerID
      };
    }
    else {
      this.onAddLibraryToFavorites(agencyID);
      this.onUpdateBorrowerIDForLibrary(agencyID, borrowerID);
    }

    this.trigger(_profile);
  },

  onAddLibraryToFavorites: function(agencyID) {
    let favoriteModel = {
      agencyID: agencyID,
      borrowerID: ''
    };

    if (!_profile.favoriteLibraries) {
      _profile.favoriteLibraries = [favoriteModel];
    }
    else if (findIndex(_profile.favoriteLibraries, 'agencyID', agencyID) === -1) {
      _profile.favoriteLibraries.push(favoriteModel);
    }

    ProfileActions.saveProfile({
      favoriteLibraries: _profile.favoriteLibraries
    });

    this.trigger(_profile);
  }

});

export default profileStore;
