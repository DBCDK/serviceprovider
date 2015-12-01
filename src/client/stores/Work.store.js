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
    this.store.result = result.work || {};
    this.store.info = result.info || [];
    this.store.error = result.error || [];
    this.trigger(this.store);
    if (this.store.result.title) {
      document.title = this.store.result.title;
    }
  }
});

export default WorkStore;
