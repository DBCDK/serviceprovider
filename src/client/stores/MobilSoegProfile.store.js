'use strict';

/**
 * @file
 * TODO create description
 */

import Reflux from 'reflux';

// Actions
import MobilSoegProfileActions from '../actions/MobilSoegProfile.action';

const MobilSoegProfileStore = Reflux.createStore({
  store: {
    userIsLoggedIn: typeof window !== 'undefined' && window.USER_IS_LOGGED_IN,
    profile: {
      agencyid: null,
      likes: [],
      mobilSoegProfileId: 0,
      pickup_agency: null
    }
  },

  getState() {
    return this.store;
  },

  init() {
    this.listenToMany(MobilSoegProfileActions);
    MobilSoegProfileActions.isLoggedIn();
    MobilSoegProfileActions.fetchMobilSoegProfile();
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

  pushStore() {
    this.trigger(this.store);
  }
});

export default MobilSoegProfileStore;
