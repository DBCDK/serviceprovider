'use strict';

import Reflux from 'reflux';

import LibraryAction from '../actions/Library.action.js';

const LibraryStore = Reflux.createStore({
  listenables: LibraryAction,
  store: {
    data: {
      agencyName: '',
      agencyId: '',
      branchId: '',
      branchNameDan: '',
      branchPhone: {},
      branchEmail: {},
      postalAddress: '',
      postalCode: '',
      city: '',
      openingHoursDan: '',
      branchWebsiteUrl: '',
      query: ''
    },
    pending: false
  },

  getInitialState() {
    return this.store;
  },

  onLibraryIdUpdated() {
    this.store.pending = true;
    this.trigger(this.store);
  },

  onLibraryIdUpdatedResponse(response) {
    this.store.data = response;
    this.store.pending = false;
    this.trigger(this.store);
  }
});

export default LibraryStore;
