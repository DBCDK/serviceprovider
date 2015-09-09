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
  likes: [],
  userIsLoggedIn: false
};

let profileStore = Reflux.createStore({
  
  init() {
    this.listenToMany(ProfileActions);
    ProfileActions.fetchProfile();
  },

  getInitialState() {
    return _profile;
  },

  onToggleEdit() {
    _profile.editEnabled = !_profile.editEnabled;
    // edit mode was disabled
    if (!_profile.editEnabled) {
      ProfileActions.saveProfile(_profile);
    }
    this.trigger(_profile);
  },

  onUpdateProfile(profile) {
    for (let attr in profile) {
      if (profile.hasOwnProperty(attr)) {
        _profile[attr] = profile[attr];
      }
    }
    this.trigger(_profile);
  },

  onConfirmSaveProfile(str) { // eslint-disable-line no-unused-vars
  },

  onSaveProfile(str) { // eslint-disable-line no-unused-vars
  },

  onFetchProfile(str) { // eslint-disable-line no-unused-vars
  },

  onUpdateAttribute(str) {
    _profile.name = str;
    this.trigger(_profile);
  },

  getProfile() {
    return _profile;
  },

  onUpdateBorrowerIDForLibrary(agencyID, borrowerID) {
    const libraryIndex = findIndex(_profile.favoriteLibraries, 'agencyID', agencyID);
    if (libraryIndex >= 0) {
      _profile.favoriteLibraries[libraryIndex].borrowerID = borrowerID;
    }
  },

  onAddLibraryToFavorites(agencyID) {
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

  onRemoveLibraryFromFavorites(agencyID) {
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
  },

  /**
   * @param {string} workId
   */
  onLikeObject(workId) {
    let request = {item_id: workId, action: null};

    const index = findIndex(_profile.likes, 'item_id', workId);
    if (index < 0) {
      request.action = 'like';
      _profile.likes.push({item_id: workId, value: 1});
    }
    else if (_profile.likes[index].value === '-1') {
      const like = _profile.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'like';
      _profile.likes[index].value = 1;
    }
    else {
      const like = _profile.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'remove';
      _profile.likes.splice(index, 1);
    }

    this.trigger(_profile);

    ProfileActions.saveLike(request);
  },

  onLikeSaved(response) {
    if (!response) {
      console.error('Some error occured when saving a like/dislike'); // eslint-disable-line no-console
    }

    ProfileActions.fetchProfile();
  },

  onDislikeObject(workId) {
    let request = {item_id: workId, action: null};

    const index = findIndex(_profile.likes, 'item_id', workId);
    if (index < 0) {
      request.action = 'dislike';
      _profile.likes.push({item_id: workId, value: -1});
    }
    else if (_profile.likes[index].value === '1') {
      const like = _profile.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'dislike';
      _profile.likes[index].value = -1;
    }
    else {
      const like = _profile.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'remove';
      _profile.likes.splice(index, 1);
    }

    this.trigger(_profile);

    ProfileActions.saveLike(request);
  }
});

export default profileStore;
