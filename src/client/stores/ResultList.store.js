'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
import QueryParser from '../../utils/QueryParser.util.js';
import QueryStore from './QueryStore.store.js';

let ResultListStore = Reflux.createStore({
  mixins: [SocketClient('getOpenSearchResultList')],

  store: {
    hasSearchBeenExecuted: false,
    info: {hits: 0, collections: 0, more: false},
    page: 0,
    pending: false,
    result: []
  },

  shouldScroll: false,

  getInitialState() {
    return this.store;
  },

  init() {
    this.listenTo(QueryStore, this.onQueryUpdated);
    this.onQueryUpdated(QueryStore.getInitialState());
    this.response(this.onResponse);
  },

  onQueryUpdated(store) {
    if (!store.queryHasChanged) {
      return;
    }
    const {query, page, worksPerPage, sort} = store;
    const offset = page * worksPerPage;

    if (page > this.store.page) {
      this.shouldScroll = $('.search-result--loadmore').offset().top - 50; // eslint-disable-line
      this.store.page = page;
    }

    if (query.length > 0) {
      if (page === 0) {
        this.empty();
      }
      this.pending();
      let q = QueryParser.objectToCql(query);
      this.request({query: q, offset, worksPerPage, sort});
    }
    else {
      this.empty();
      this.onResponse([]);
    }
  },

  pending(state = true) {
    this.store.pending = state;
    this.store.hasSearchBeenExecuted = true;
    this.trigger(this.store);
  },

  onResponse(result) {
    let resultList = result.result || [];
    let info = result.info || [];
    this.store.result = this.store.result.concat(resultList);
    this.store.info = info;
    this.store.pending = false;
    if (info.more === 'true') {
      this.store.offset += this.store.worksPerPage;
    }
    this.trigger(this.store);

    if (this.shouldScroll) {
      this.doScroll();
    }
  },

  doScroll() {
    setTimeout(() => {
      $(window).scrollTo(this.shouldScroll, 850, {interrupt: true, axis: 'y'}); // eslint-disable-line 
      this.shouldScroll = false;
    }, 50);
  },

  empty() {
    this.store.result = [];
    this.store.info = {hits: 0, collections: 0, more: false};
  },

  // return the store data
  getStore() {
    return this.store;
  }
});

export default ResultListStore;
