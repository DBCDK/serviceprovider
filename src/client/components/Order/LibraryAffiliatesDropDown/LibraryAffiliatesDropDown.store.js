'use strict';

import Reflux from 'reflux';
import LibraryAffiliateDropDownActions from './LibraryAffiliatesDropDown.action.js';

let LibraryAffiliateDropDownStore = Reflux.createStore({
  store: {
    libraries: []
  },

  init() {
    this.listenToMany(LibraryAffiliateDropDownActions);
  },

  getInitialState() {
    return this.store;
  },

  onGetLibraryAffiliatesForAgencyResponse(resp) {
    if (!resp.error && !resp.isEmpty) {
      this.store.libraries = resp.libraries;
    }
    this.trigger(this.store);
  }
});

export default LibraryAffiliateDropDownStore;
