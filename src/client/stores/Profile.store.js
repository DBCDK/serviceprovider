'use strict';

/**
 * @file
 * TODO create description
 */

import Reflux from 'reflux';

import {findIndex} from 'lodash';

// Actions
import ProfileActions from '../actions/Profile.action';

const ProfileStore = Reflux.createStore({
  store: {
    userIsLoggedIn: typeof window !== 'undefined' && window.USER_IS_LOGGED_IN,
    profile: {
      agencyid: null,
      likes: [],
      pickup_agency: null
    }
  },

  getState() {
    return this.store;
  },

  init() {
    this.listenToMany(ProfileActions);
    ProfileActions.isLoggedIn();
    ProfileActions.fetchMobilSoegProfile();
  },

  onIsLoggedInResponse(response) {
    // strict check on true due to possible error object from Promise might evaluate to true which would be wrong
    this.store.userIsLoggedIn = response === true;
    this.pushStore();
  },

  onFetchMobilSoegProfileResponse(response) {
    if (response.statusCode === 200) {
      this.store.profile = response.body;
      this.pushStore();
    }
  },

  /**
   * @param {string} workId
   */
  onLikeObject(workId) {
    let request = {item_id: workId, action: null};
    const myLikes = this.store.profile.likes;

    const index = findIndex(myLikes, 'item_id', workId);
    if (index < 0) {
      request.action = 'like';
      myLikes.push({item_id: workId, value: 1});
    }
    else if (myLikes[index].value === '-1') {
      const like = myLikes[index];
      request.id = like.id || null;
      request.action = 'like';
      myLikes[index].value = 1;
    }
    else {
      const like = myLikes[index];
      request.id = like.id || null;
      request.action = 'remove';
      myLikes.splice(index, 1);
    }

    this.store.profile.likes = myLikes;

    this.trigger(this.store);

    ProfileActions.saveLikeToMobilSoegProfile(request);
  },

  onDislikeObject(workId) {
    let request = {item_id: workId, action: null};
    const myLikes = this.store.profile.likes;

    const index = findIndex(myLikes, 'item_id', workId);
    if (index < 0) {
      request.action = 'dislike';
      myLikes.push({item_id: workId, value: -1});
    }
    else if (myLikes[index].value === '1') {
      const like = myLikes[index];
      request.id = like.id || null;
      request.action = 'dislike';
      myLikes[index].value = -1;
    }
    else {
      const like = myLikes[index];
      request.id = like.id || null;
      request.action = 'remove';
      myLikes.splice(index, 1);
    }

    this.store.profile.likes = myLikes;

    this.trigger(this.store);

    ProfileActions.saveLikeToMobilSoegProfile(request);
  },

  onLikeSaved(response) {
    if (!response) {
      console.error('Some error occured when saving a like/dislike'); // eslint-disable-line no-console
    }

    ProfileActions.fetchMobilSoegProfile();
  },

  pushStore() {
    this.trigger(this.store);
  }
});

export default ProfileStore;
