'use strict';

import Reflux from 'reflux';
import RecommendationsAction from '../actions/Recommendations.action.js';
import CoverImageActions from '../actions/CoverImage.action.js';

let _store = {
  result: [],
  pending: false
};

/**
 * Store containing the recommendations related to the search query
 */
let RecommendationsStore = Reflux.createStore({

  init() {
    // Register statusUpdate action
    this.listenTo(RecommendationsAction.updated, this.update);
    this.listenTo(RecommendationsAction.pending, this.updatePending);
  },

  updatePending(state) {
    _store.pending = state;
    this.trigger(_store);
  },

  update(result) {
    result.forEach(element => CoverImageActions(element.identifiers));
    _store.result = result;
    _store.pending = false;
    this.trigger(_store);
  },

  getStore() {
    return _store;
  }
});

export default RecommendationsStore;
