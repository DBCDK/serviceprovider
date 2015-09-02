'use strict';

import Reflux from 'reflux';

import QueryStore from './QueryStore.store.js';
import LibrarySearchAction from '../actions/LibrarySearch.action.js';

const LibrarySearchStore = Reflux.createStore({
  listenables: LibrarySearchAction,
  store: {
    data: [],
    pending: false
  },

  init() {
    this.listenTo(QueryStore, this.onQueryUpdated);
  },

  libraryQueryUpdatedResponse(data) {
    this.store.pending = false;
    if (!data.isEmpty && !data.error) {
      this.store.data = data.agencies;
    }
    this.trigger(this.store);
  },

  onQueryUpdated(store) {
    LibrarySearchAction.libraryQueryUpdated.trigger(store.query.map((val) => {
      return val.value;
    }).join(' '));
    this.store.pending = true;
    this.trigger(this.store);
  },

  getInitialState() {
    if (window.QUERYSTRING_PROPS && window.QUERYSTRING_PROPS !== 'undefined') {
      LibrarySearchAction.libraryQueryUpdated.trigger(window.QUERYSTRING_PROPS.text);
      this.store.pending = true;
    }
    return this.store;
  }
});

export default LibrarySearchStore;

