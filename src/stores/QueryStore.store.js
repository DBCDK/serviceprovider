'use strict';

import Reflux from 'reflux';
import {extend, isString} from 'lodash';
import QueryParser from '../utils/QueryParser.util.js';
import QueryActions from '../actions/QueryUpdate.action.js';

const defaultStore = {
  queryHasChanged: false,
  query: [],
  page: 0,
  worksPerPage: 12,
  sort: 'default'
};

let store = extend({}, defaultStore);

/**
 * Store containing the current query of the page
 */
let QueryStore = Reflux.createStore({
  listenables: QueryActions,

  triggerOnQueryChange() {
    store.search = store.query.length && `?${QueryParser.objectToString(store.query)}` || '';
    store.queryHasChanged = true;
    this.trigger(store);
    return store;
  },

  setStore(newStore) {
    store = newStore;
  },

  getInitialState() {
    return store;
  },
  init() {
    if (typeof window !== 'undefined') {
      store.query = QueryParser.urlQueryToObject(window.location.search);
      return this.triggerOnQueryChange(store);
    }
  },

  onReset() {
    store = extend({}, defaultStore);
    this.triggerOnQueryChange(store);
  },

  onUpdate(query) {
    store.query = isString(query) && QueryParser.urlQueryToObject(query) || query;
    store.page = 0;
    this.triggerOnQueryChange(store);
  },

  onAdd(queryElement) {
    store.query.push(queryElement);
    store.page = 0;
    this.triggerOnQueryChange(store);
  },

  onNextPage() {
    store.page++;
    this.triggerOnQueryChange();
  },

  onPrevPage() {
    store.page--;
    this.triggerOnQueryChange();
  },

  onChangedInput(inputValue) {
    store.queryHasChanged = false;
    store.inputValue = inputValue;
    this.trigger(store);
  },

  getCql() {
    return QueryParser.objectToCql(store.query);
  }
});

export default QueryStore;
