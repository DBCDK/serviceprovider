'use strict';

import Reflux from 'reflux';
import CoverImageActions from '../actions/CoverImage.action.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object
let _store = {
  images: new Map()
};

/**
 * Store containing the current query of the page
 */
let CoverImageStore = Reflux.createStore({

  // Initial setup by reflux
  init() {
    // Register statusUpdate action
    this.listenTo(CoverImageActions.updated, this.update);
  },

  // update the query object and trigger an action
  update(result) {
    if (result.error) {
      throw new Error('A response error occured: ', result.error);
    }
    _store.images.set(result.identifiers[0], result.result);
    this.trigger(_store);
  },

  // return the store data
  getStore() {
    return _store;
  }
});

export default CoverImageStore;
