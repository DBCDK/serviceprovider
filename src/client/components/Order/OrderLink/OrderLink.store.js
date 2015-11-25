'use strict';

/**
 * @file
 * Store for the OrderLink component
 */

import Reflux from 'reflux';
import OrderLinkActions from './OrderLink.action.js';

let store = {};

const OrderLinkStore = Reflux.createStore({
  getState: function() {
    return store;
  },

  init: function() {
    this.listenTo(OrderLinkActions.updated, this.update);
  },

  update(response) {
    const pid = response.info.pids.toString();
    if (response.result.hasOwnProperty('canOrder')) {
      store[pid] = response.result.canOrder;
    }
    else {
      store[pid] = 'false';
    }

    this.pushStore();
  },

  pushStore: function() {
    this.trigger(store);
  }
});

export default OrderLinkStore;
