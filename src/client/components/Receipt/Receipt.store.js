'use strict';

/**
 * @file
 * Store for the Receipt component
 */

import Reflux from 'reflux';
import ReceiptActions from './Receipt.action.js';

let store = {};

const ReceiptStore = Reflux.createStore({
  getState: function() {
    return store;
  },

  init: function() {
    this.listenTo(ReceiptActions.updated, this.update);
  },

  update(response) {
    const pid = response.info.pids.toString();
    if (response.result.hasOwnProperty('orderPlaced')) {
      store[pid] = response.result.orderPlaced;
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

export default ReceiptStore;
