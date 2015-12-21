'use strict';

/**
 * @file
 * Libraries Store. Contains a list of all libraries in a given agency.
 */

import Reflux from 'reflux';
import LibrariesActions from '../actions/Libraries.actions';

let LibrariesStore = Reflux.createStore({
  store: {
    libraries: []
  },

  init() {
    this.listenToMany(LibrariesActions);
  },

  getInitialState() {
    return this.store;
  },

  onFetchAllAffiliatesResponse(resp) {
    if (resp) {
      this.store.libraries = resp;
    }
    this.trigger(this.store);
  }
});

export default LibrariesStore;
