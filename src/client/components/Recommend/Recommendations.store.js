'use strict';

import Reflux from 'reflux';
import {isArray, isUndefined} from 'lodash';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

// Actions
import RecommendationsActions from './Recommendations.action';

export const defaultLikes = [
  '870970-basis:28511663',
  '870970-basis:29754519',
  '870970-basis:29060835',
  '870970-basis:22629344'
];

/**
 * Store containing the recommendations related to the search query
 */
let RecommendationsStore = Reflux.createStore({
  mixins: [SocketClient('getRecommendations')],

  store: {
    result: [],
    pending: false,
    info: {
      more: false
    }
  },

  init() {
    this.response(this.onResponse);
    this.listenToMany(RecommendationsActions);
  },

  onDefault(data) {
    this.onRequest({likes: defaultLikes, dislikes: [], isFrontPage: data.isFrontPage});
  },

  onRequest(data) {
    if (!isUndefined(data) && isArray(data.likes) && isArray(data.dislikes) && data.likes.length) {
      this.updatePending(true);
      this.request(data);
    }
    else {
      this.onDefault(data);
    }
  },

  onResponse(result) {
    this.store.pending = false;
    if (result.error) {
      throw new Error(result.error.statusMessage, result.error);
    }
    else {
      this.store.result = result.splice(0, 20);
      this.pushStore();
    }
  },

  updatePending(state) {
    this.store.pending = state;
    this.pushStore();
  },

  update(result) {
    this.store.result = result.splice(0, 20);
    this.store.pending = false;
    this.pushStore();
  },

  getDefaultRecommendations() {
    return defaultLikes;
  },

  pushStore() {
    this.trigger(this.store);
  }
});

export default RecommendationsStore;
