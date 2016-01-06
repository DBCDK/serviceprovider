'use strict';

import Reflux from 'reflux';
import OrderPolicyActions from '../actions/OrderPolicy.actions';

const OrderPolicyStore = Reflux.createStore({
  store: {},

  init() {
    this.listenTo(OrderPolicyActions.fetchOrderPolicyResponse, this.update);
  },

  getInitialState() {
    return this.store;
  },

  update(response) {
    const pid = response.info.pids.toString();
    if (response.result.hasOwnProperty('canOrder')) {
      this.store[pid] = {canOrder: response.result.canOrder};
    }
    else {
      this.store[pid] = {canOrder: false};
    }

    this.trigger(this.store);
  }
});

export default OrderPolicyStore;
