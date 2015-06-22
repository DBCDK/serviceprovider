'use strict';

import Reflux from 'reflux';
import RecommendationsAction from '../actions/Recommendations.action.js';
import CoverImageActions from '../actions/CoverImage.action.js';

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
    result.forEach(element => CoverImageActions(element.identifiers));
    _store.recommendations = result;
    this.trigger(_store);
  },

  getStore() {
    return _store;
  }
});

export default RecommendationsStore;
