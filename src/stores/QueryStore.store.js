'use strict';

import Reflux from 'reflux';
import QueryParser from '../utils/QueryParser.util.js';
import QueryActions from '../actions/QueryUpdate.action.js';

const defaultStore = {
  query: [],
  page: 1,
  worksPerPage: 12,
  sort: 'default'
};

let store = defaultStore;

/**
 * Store containing the current query of the page
 */
let QueryStore = Reflux.createStore({
  listenables: QueryActions,

  onReset() {
    store = defaultStore;
    this.trigger(store);
  },

  onUpdate(query) {
    store.query = query;
    store.page = 0;
    this.trigger(store);
    QueryActions.queryUpdated();
  },

  onAdd(queryElement) {
    store.query.push(queryElement);
    store.page = 0;
    this.trigger(store);
    QueryActions.queryUpdated();
  },

  onNextPage() {
    store.page++;
    this.trigger(store);
  },

  onPrevPage() {
    store.page--;
    this.trigger(store);
  },

  getStore() {
    return store;
  },

  getCql() {
    return QueryParser.objectToCql(store.query);
  }
});

export default QueryStore;
