'use strict';

/**
 * @file
 * Profile Store
 */

import Reflux from 'reflux';
import MessageActions from '../actions/Message.action.js';

let messageStore = Reflux.createStore({
  store: {
    messageType: 'hide',
    message: ''
  },

  init() {
    this.listenToMany(MessageActions);
  },

  getInitialState() {
    return this.store;
  },

  onSetUserMessage(data) {
    this.store.messageType = data.error ? 'warning' : 'info';
    this.store.message = data.message;
    this.trigger(this.store);
  }
});

export default messageStore;
