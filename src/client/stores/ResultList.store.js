'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

// Utils
import QueryParser from '../../utils/QueryParser.util.js';

import FacetsActions from '../components/Facets/Facets.action.js';

// Stores
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

  getInitialState() {
    return this.store;
  },

  init() {
    this.listenTo(QueryStore, this.onQueryUpdated);
    this.onQueryUpdated(QueryStore.getInitialState());
    this.response(this.onResponse);
  },

  onQueryUpdated(queryStore) {
    if (!queryStore.queryHasChanged) {
      return;
    }

    const {query, page, worksPerPage, sort} = queryStore;
    const offset = page * worksPerPage;

    if (query.length > 0) {
      if (page === 0) {
        this.empty();
      }
      this.pending();
      let q = QueryParser.objectToCql(query);
      this.request({query: q, offset, worksPerPage, sort});
      FacetsActions.fetchFacets({query: q, number: 5});
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
