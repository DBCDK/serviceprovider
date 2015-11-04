'use strict';

import Reflux from 'reflux';
import {filter} from 'lodash';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
import QueryStore from './QueryStore.store.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object


/**
 * Helper functions for the filter store
 *
 * Convert query objects to a text string, filtering all elements with type = text
 *
 * @param {Array} query
 * @returns {Array}
 */

const FilterStoreHelpers = {

  convertFilterWords(words) {
    return words.map((word) => {
      return {
        value: word,
        type: 'text'
      };
    });
  },

  getQueryTextElements(query) {
    return filter(query, element => element.type === 'text')
      .map(element => element.value);
  }

};

FilterStoreHelpers.getQueryTextElements = function getQueryTextElements(query) {
  return filter(query, element => element.type === 'text')
    .map(element => element.value);
};

/**
 * Store containing the current query of the page
 */
let FilterStore = Reflux.createStore({
  mixins: [FilterStoreHelpers, SocketClient('getFilterGuides')],
  filters: [],

  getInitialState() {
    return this.filters;
  },

  setStore(filters) {
    this.filters = filters;
  },

  init() {
    // Register statusUpdate action
    this.listenTo(QueryStore, this.onQueryUpdated);
    this.onQueryUpdated(QueryStore.getInitialState());
    this.response(this.onResponse);
  },

  onQueryUpdated(store) {
    if (store.query.length > 0) {
      let q = this.getQueryTextElements(store.query).join(' ');
      this.request(q);
    }
    else {
      this.onResponse([]);
    }
  },

  onResponse(filters) {
    this.filters = this.convertFilterWords(filters);
    this.trigger(this.filters);
  }
});

export default FilterStore;
