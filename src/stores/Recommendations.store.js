'use strict';

import Reflux from 'reflux';
import RecommendationsAction from '../actions/Recommendations.action.js';

let _store = {};

/**
 * Store containing the recommendations related to the search query
 */
let RecommendationsStore = Reflux.createStore({

  init() {
    // Register statusUpdate action
    this.listenTo(RecommendationsAction.updated, this.update);
  },

  update(result) {
    _store.recommendations = result;
    this.trigger(_store);
  },

  getStore() {
    return _store;
  }
});

export default RecommendationsStore;
