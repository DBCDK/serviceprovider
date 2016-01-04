'use strict';

import Reflux from 'reflux';
import HoldingStatusActions from './HoldingStatus.action.js';

let HoldingStatusStore = Reflux.createStore({
  store: {},

  init() {
    this.listenToMany(HoldingStatusActions);
  },

  getInitialState() {
    return this.store;
  },

  onGetHoldingStatusResponse(resp) {
    if (!resp.isEmpty) {
      if (resp.result.hasOwnProperty('available')) {
        this.store[resp.info.pid] = resp.result;
      }
      else {
        this.store[resp.info.pid] = resp.error[0];
      }
    }
    this.trigger(this.store);
  }
});

export default HoldingStatusStore;

