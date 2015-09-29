'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
import QueryParser from '../utils/QueryParser.util.js';
import QueryStore from './QueryStore.store.js';

let _store = {
  result: [],
  info: {hits: 0, collections: 0, more: false},
  pending: false,
  hasSearchBeenExecuted: false
};

let ResultListStore = Reflux.createStore({
  mixins: [SocketClient('getOpenSearchResultList')],

  getInitialState() {
    return _store;
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
    _store.pending = state;
    _store.hasSearchBeenExecuted = true;
    this.trigger(_store);
  },

  onResponse(result) {
    let resultList = result.result || [];
    let info = result.info || [];
    _store.result = _store.result.concat(resultList);
    _store.info = info;
    _store.pending = false;
    if (info.more === 'true') {
      _store.offset += _store.worksPerPage;
    }
    this.trigger(_store);
  },

  empty() {
    _store.result = [];
    _store.info = {hits: 0, collections: 0, more: false};
  },

  // return the store data
  getStore() {
    return _store;
  }
});

export default ResultListStore;
