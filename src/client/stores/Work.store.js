'use strict';

import Reflux from 'reflux';
import WorkActions from '../actions/Work.action.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object
let _store = {
  result: {},
  info: [],
  error: []
};

/**
 * Store containing the current query of the page
 */
let WorkStore = Reflux.createStore({

  // Initial setup by reflux
  init() {
    // Register statusUpdate action
    this.listenTo(WorkActions.updated, this.update);
  },

  getInitialState() {
    return _store;
  },

  // update the work object and trigger an action
  update(result) {
    let work = result.work || {};
    let info = result.info || [];
    let error = result.error || [];
    // this.callImageActions(work);
    _store.result = work;
    _store.info = info;
    _store.error = error;
    this.trigger(_store);
  },

  // return the store data
  getStore() {
    return _store;
  }
});

export default WorkStore;
