'use strict';

import Reflux from 'reflux';
import {isUndefined, isArray} from 'lodash';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

// Actions
import RecommendationsActions from '../actions/Recommendations.action.js';

export const defaultLikes = [
  '870970-basis:51263146',
  '870970-basis:51115155',
  '870970-basis:28394438',
  '870970-basis:22629344',
  '870970-basis:25915690',
  '870970-basis:24929604',
  '870970-basis:27796664',
  '870970-basis:26588707',
  '870970-basis:23372525',
  '870970-basis:28280041',
  '870970-basis:51342860',
  '870970-basis:28290853'
];

/**
 * Store containing the recommendations related to the search query
 */
let RecommendationsStore = Reflux.createStore({
  mixins: [SocketClient('getRecommendations')],
  listenables: RecommendationsActions,

  store: {
    result: [],
    pending: false,
    info: {more: false}
  },

  init() {
    this.response(this.onResponse);
  },

  onDefault() {
    this.onRequest({likes: defaultLikes, dislikes: []});
  },

  onRequest(data) {
    if (isArray(data.likes) && isArray(data.dislikes) && data.likes.length > 0 || data.dislikes.length > 0) {
      this.updatePending(true);
      this.request(data);
    }
  },

  onResponse(result) {
    this.store.pending = false;
    if (result.error) {
      throw new Error(result.error.statusMessage, result.error);
    }
    else {
      this.store.result = result.splice(0, 20);
      this.trigger(this.store);
    }
  },

  updatePending(state) {
    this.store.pending = state;
    this.trigger(this.store);
  },

  update(result) {
    this.store.result = result.splice(0, 20);
    this.store.pending = false;
    this.trigger(this.store);
  },

  getStore() {
    return this.store;
  },

  getDefaultRecommendations() {
    return defaultLikes;
  }
});

export default RecommendationsStore;
