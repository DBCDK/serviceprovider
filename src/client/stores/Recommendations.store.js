'use strict';

import Reflux from 'reflux';

import RecommendationActions from '../actions/Recommendations.actions.js';

const RecommendationsStore = Reflux.createStore({
  listenables: RecommendationActions,
  store: {
    recommendations: [],
    error: {},
    pending: false
  },

  getInitialState() {
    return this.store;
  },

  getRecommendations() {
    this.store.pending = true;
    this.trigger(this.store);
  },

  getRecommendationsResponse(data) {
    this.store.pending = false;
    this.store.error = {};

    if (data.error) {
      this.store.error = data.error;
    }
    else {
      this.store.recommendations = data;
    }

    this.trigger(this.store);
  }
});

export default RecommendationsStore;
