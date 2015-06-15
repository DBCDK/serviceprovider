'use strict';

import Reflux from 'reflux';
import QueryParser from '../utils/QueryParser.util.js';
import queryUpdate from '../actions/QueryUpdate.action.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object
let _query = [];

/**
 * Store containing the current query of the page
 */
let QueryStore = Reflux.createStore({

  // Initial setup by reflux
  init() {
    // Register statusUpdate action
    this.listenTo(queryUpdate, this.update);
  },

  // update the query object and trigger an action
  update(query) {
    _query = query;
    this.trigger(_query);
  },

  // return the query store
  getQuery() {
    return _query;
  },

  // return the content of the querystore as cql
  getCql() {
    return QueryParser.objectToCql(_query);
  }
});

export default QueryStore;
