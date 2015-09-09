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
  favoriteLibraries: [],
  favoriteLibrariesResolved: [],
  likes: []
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
    if (libraryIndex >= 0) {
      _profile.favoriteLibraries[libraryIndex].borrowerID = borrowerID;
    }
  },

  onAddLibraryToFavorites: function(agencyID) {
    let favoriteModel = {
      agencyID: agencyID,
      borrowerID: '',
      default: 0
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
  },

  onRemoveLibraryFromFavorites: function(agencyID) {
    let index = findIndex(_profile.favoriteLibraries, 'agencyID', agencyID);

    if (index > -1) {
      _profile.favoriteLibraries.splice(index, 1);
    }

    ProfileActions.saveProfile({
      favoriteLibraries: _profile.favoriteLibraries
    });

    this.trigger(_profile);
  },

  onLibraryIdUpdatedResponse(agency) {
    _profile.favoriteLibrariesResolved.push(agency);
    this.trigger(_profile);
  },

  setLibraryAsDefault(agencyID) {
    const defaultLibraryIndex = findIndex(_profile.favoriteLibraries, 'default', 1);
    if (defaultLibraryIndex > -1) {
      _profile.favoriteLibraries[defaultLibraryIndex].default = 0;
    }

    const libraryIndex = findIndex(_profile.favoriteLibraries, 'agencyID', agencyID);
    if (libraryIndex >= 0) {
      _profile.favoriteLibraries[libraryIndex].default = 1;
    }

    this.trigger(_profile);
  }
});

export default profileStore;
