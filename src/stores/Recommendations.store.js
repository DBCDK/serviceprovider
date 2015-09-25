'use strict';

import Reflux from 'reflux';
import {shuffle} from 'lodash';
import SocketClient from '../utils/ServiceProviderSocketClient.js';
import RecommendationsActions from '../actions/Recommendations.action.js';

export const defaultRecommendations = [
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

let _store = {
  result: [],
  pending: false,
  info: {more: false}
};

/**
 * Store containing the recommendations related to the search query
 */
let RecommendationsStore = Reflux.createStore({
  mixins: [SocketClient('getRecommendations')],
  listenables: RecommendationsActions,

  init() {
    this.response(this.onResponse);
  },

  onDefault() {
    this.onRequest(defaultRecommendations);
  },
  onRequest(data) {
    if (data.length > 0) {
      this.updatePending(true);
      this.request(data);
    }
  },

  onResponse(result) {
    _store.result = shuffle(result).splice(0, 20);
    _store.pending = false;
    this.trigger(_store);
  },


  updatePending(state) {
    _store.pending = state;
    this.trigger(_store);
  },

  update(result) {
    _store.result = shuffle(result).splice(0, 20);
    _store.pending = false;
    this.trigger(_store);
  },

  getStore() {
    return _store;
  },

  getDefaultRecommendations() {
    return defaultRecommendations;
  }
});

export default RecommendationsStore;
