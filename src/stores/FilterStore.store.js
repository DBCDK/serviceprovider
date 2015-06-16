'use strict';

import Reflux from 'reflux';
import FilterActions from '../actions/Filter.action.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object
let _filters = [];

function convertFilterWords(words) {
  return words.map((word) => {
    return {
      value: word,
      type: 'text'
    };
  });
}

/**
 * Store containing the current query of the page
 */
let FilterStore = Reflux.createStore({

  // Initial setup by reflux
  init() {
    // Register statusUpdate action
    this.listenTo(FilterActions.updated, this.update);
  },

  // update the query object and trigger an action
  update(filters) {
    _filters = convertFilterWords(filters);
    this.trigger(_filters);
  },

  // return the store data
  getFilters() {
    return _filters;
  }
});

export default FilterStore;
