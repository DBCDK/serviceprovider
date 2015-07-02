'use strict';

import Reflux from 'reflux';
import OrderActions from '../actions/Order.action.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object
let _store = {
};

/**
 * Store containing the current query of the page
 */
let OrderStore = Reflux.createStore({

  // Initial setup by reflux
  init() {
    // Register statusUpdate action
    this.listenTo(OrderActions.updated, this.update);
  },

  // update the work object and trigger an action
  update() {
    this.trigger(_store);
  },

  // return the store data
  getStore() {
    return _store;
  }
});

export default OrderStore;
