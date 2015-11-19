'use strict';

/**
 * @file
 * News Store. Contains a list of news.
 */
import Reflux from 'reflux';
import NewsActions from '../actions/News.action.js';

let newsStore = Reflux.createStore({

  store: {
    news: {
      items: [],
      haveBeenFetched: false,
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
  }
});

export default newsStore;
