'use strict';

/**
 * @file
 * News Store. Contains a list of news and|or single news items
 */

import Reflux from 'reflux';
import NewsActions from '../actions/News.action.js';

let newsStore = Reflux.createStore({

  store: {
    news: {
      items: [],
      haveBeenFetched: false,
      loading: false
    },
    singles: {
      news: {},
      loading: false
    }
  },

  init() {
    this.listenToMany(NewsActions);
  },

  getInitialState() {
    return this.store;
  },

  onfetchNewsList() {
    this.store.news.loading = true;
    this.trigger(this.store);

  },
  onUpdateNewsList(response) {
    this.store.news = {
      items: response,
      haveBeenFetched: true,
      loading: false
    };
    this.trigger(this.store);
  },

  onfetchNewsById(id) {
    this.store.singles[id] = {loading: true};
    this.trigger(this.store);
  },

  onUpdateNewsById(response) {
    this.store.singles[response.nid] = response;
    this.trigger(this.store);
  }
});

export default newsStore;
