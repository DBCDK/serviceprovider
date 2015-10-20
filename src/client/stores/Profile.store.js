'use strict';

/**
 * @file
 * Profile Store
 */
import {findIndex} from 'lodash';

import Reflux from 'reflux';
import ProfileActions from '../actions/Profile.action.js';

let profileStore = Reflux.createStore({

  store: {
    name: '',
    imageUrl: '/dummy.jpg',
    followingCount: 16,
    groupsCount: 7,
    followersCount: 35,
    editEnabled: false,
    favoriteLibraries: [],
    favoriteLibrariesResolved: [],
    likes: [],
    userIsLoggedIn: false,
    borrowerCheckStatus: '',
    borrowerInfoSaved: false
  },

  init() {
    this.listenToMany(ProfileActions);
    ProfileActions.fetchProfile();
  },

  getInitialState() {
    return this.store;
  },

  onToggleEdit() {
    this.store.editEnabled = !this.store.editEnabled;
    // edit mode was disabled
    if (!this.store.editEnabled) {
      ProfileActions.saveProfile(this.store);
    }
    this.trigger(this.store);
  },

  onUpdateProfile(profile) {
    for (let attr in profile) {
      if (profile.hasOwnProperty(attr)) {
        this.store[attr] = profile[attr];
      }
    }
    this.trigger(this.store);
  },

  onUpdateAttribute(str) {
    this.store.name = str;
    this.trigger(this.store);
  },

  getProfile() {
    return this.store;
  },

  onAddLibraryToFavorites(agencyID, libraryID) {
    let favoriteModel = {
      agencyID: agencyID,
      libraryID: libraryID,
      borrowerID: '',
      borrowerPIN: '',
      default: 0
    };

    if (!this.store.favoriteLibraries) {
      this.store.favoriteLibraries = [favoriteModel];
    }
    else if (findIndex(this.store.favoriteLibraries, 'agencyID', agencyID) === -1) {
      this.store.favoriteLibraries.push(favoriteModel);
    }

    ProfileActions.saveProfile({
      favoriteLibraries: this.store.favoriteLibraries
    });

    this.trigger(this.store);
  },

  onRemoveLibraryFromFavorites(agencyID) {
    let index = findIndex(this.store.favoriteLibraries, 'agencyID', agencyID);

    if (index > -1) {
      this.store.favoriteLibraries.splice(index, 1);
    }

    ProfileActions.saveProfile({
      favoriteLibraries: this.store.favoriteLibraries
    });

    this.trigger(this.store);
  },

  onLibraryIdUpdatedResponse(agency) {
    this.store.favoriteLibrariesResolved.push(agency);
    this.trigger(this.store);
  },

  setLibraryAsDefault(agencyID) {
    const defaultLibraryIndex = findIndex(this.store.favoriteLibraries, 'default', 1);
    if (defaultLibraryIndex > -1) {
      this.store.favoriteLibraries[defaultLibraryIndex].default = 0;
    }

    const libraryIndex = findIndex(this.store.favoriteLibraries, 'agencyID', agencyID);
    if (libraryIndex >= 0) {
      this.store.favoriteLibraries[libraryIndex].default = 1;
    }

    ProfileActions.saveProfile(this.store);

    this.trigger(this.store);
  },

  /**
   * @param {string} workId
   */
  onLikeObject(workId) {
    let request = {item_id: workId, action: null};

    const index = findIndex(this.store.likes, 'item_id', workId);
    if (index < 0) {
      request.action = 'like';
      this.store.likes.push({item_id: workId, value: 1});
    }
    else if (this.store.likes[index].value === '-1') {
      const like = this.store.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'like';
      this.store.likes[index].value = 1;
    }
    else {
      const like = this.store.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'remove';
      this.store.likes.splice(index, 1);
    }

    this.trigger(this.store);

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

    const index = findIndex(this.store.likes, 'item_id', workId);
    if (index < 0) {
      request.action = 'dislike';
      this.store.likes.push({item_id: workId, value: -1});
    }
    else if (this.store.likes[index].value === '1') {
      const like = this.store.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'dislike';
      this.store.likes[index].value = -1;
    }
    else {
      const like = this.store.likes[index];
      request.id = like.id || null;
      request.uid = like.profileId || null;
      request.action = 'remove';
      this.store.likes.splice(index, 1);
    }

    this.trigger(this.store);

    ProfileActions.saveLike(request);
  },

  checkBorrowerAndSaveToProfile() {
    this.store.borrowerCheckStatus = 'pending';
    this.trigger(this.store);
  },

  checkBorrowerAndSaveToProfileResponse(response) {
    this.store.borrowerCheckStatus = response.borrowerStatus;
    this.store.borrowerInfoSaved = response.profileStatus;
    this.trigger(this.store);
  }
});

export default profileStore;
