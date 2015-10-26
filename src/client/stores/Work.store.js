'use strict';

import Reflux from 'reflux';
import WorkActions from '../actions/Work.action.js';

/**
 * Store containing the current query of the page
 */
let WorkStore = Reflux.createStore({
  store: {
    result: {},
    info: [],
    error: []
  },

  // Initial setup by reflux
  init() {
    // Register statusUpdate action
    this.listenTo(WorkActions.updated, this.update);
  },

  getInitialState() {
    return this.store;
  },

  // update the work object and trigger an action
  update(result) {
    let work = result.work || {};
    let info = result.info || [];
    let error = result.error || [];

    this.store.result = work;
    this.store.info = info;
    this.store.error = error;
    this.trigger(this.store);
  },

  // return the store data
  getStore() {
    return this.store;
  }
});

export default WorkStore;
