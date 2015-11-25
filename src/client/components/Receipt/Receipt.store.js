'use strict';

/**
 * @file
 * Store for the Receipt component
 */

import Reflux from 'reflux';
import ReceiptActions from './Receipt.action.js';

const ReceiptStore = Reflux.createStore({
  store: {},

  getState() {
    return this.store;
  },

  init() {
    this.listenTo(ReceiptActions.updated, this.update);
  },

  update(response) {
    const pid = response.info.pids.toString();
    this.store[pid] = response.result.hasOwnProperty('orderPlaced') ? response.result.orderPlaced : 'false';
    this.pushStore();
  },

  pushStore() {
    this.trigger(this.store);
  }
});

export default ReceiptStore;
