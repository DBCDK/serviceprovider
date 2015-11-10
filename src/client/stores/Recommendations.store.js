'use strict';

import Reflux from 'reflux';

import RecommendationActions from '../actions/Recommendations.actions.js';
import ProfileStore from './Profile.store';

const RecommendationsStore = Reflux.createStore({
  listenables: RecommendationActions,
  store: {
    recommendations: {
      generic: [],
      personal: []
    },
    error: {},
    pending: false,
    loggedIn: false,
    likes: []
  },

  init() {
    this.listenTo(ProfileStore, this.profileStoreUpdate);
  },

  getInitialState() {
    return this.store;
  },

  profileStoreUpdate(profile) {
    this.store.loggedIn = profile.userIsLoggedIn;
    this.store.likes = profile.likes;
  },

  getRecommendations() {
    this.store.pending = true;
    this.trigger(this.store);
  },

  getRecommendationsResponse(data) {
    this.store.pending = false;
    this.store.error = {};

    if (data.error) {
      this.store.error = data.error;
    }
    else {
      this.store.recommendations.generic = data.generic;
      this.store.recommendations.personal = data.personal;
    }

    this.trigger(this.store);
  }
});

export default RecommendationsStore;
