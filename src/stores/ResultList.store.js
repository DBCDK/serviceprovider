'use strict';

import Reflux from 'reflux';
import ResultListActions from '../actions/ResultList.action.js';
import QueryActions from '../actions/QueryUpdate.action.js';
import CoverImageActions from '../actions/CoverImage.action.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object
let _store = {
  result: [],
  info: {hits: 0, collections: 0, more: false},
  pending: false,
  hasSearchBeenExecuted: false
};

/**
 * Store containing the current query of the page
 */
let ResultListStore = Reflux.createStore({

  // Initial setup by reflux
  init() {
    // Register statusUpdate action
    this.listenTo(ResultListActions.updated, this.update);
    this.listenTo(ResultListActions.clear, this.empty);
    this.listenTo(ResultListActions.pending, this.updatePending);
  },

  updatePending(state = true) {
    _store.pending = state;
    _store.hasSearchBeenExecuted = true;
    this.trigger(_store);
  },

  // update the resultList object and trigger an action
  update(result) {
    let resultList = result.result || [];
    let info = result.info || [];
    this.callImageActions(resultList);
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
  },

  callImageActions(resultList) {
    resultList.forEach(result => CoverImageActions(result.identifiers));
  },

  // return the store data
  getStore() {
    return _store;
  }
});

export default ResultListStore;
