'use strict';

/**
 * @file
 * News Store. Contains a list of news and|or single news items
 */

import Reflux from 'reflux';
import EventActions from '../actions/Event.action.js';

let eventStore = Reflux.createStore({

  store: {
    events: {
      items: [],
      haveBeenFetched: false,
      loading: false
    },
    singles: {
      events: {},
      loading: false
    }
  },

  init() {
    this.listenToMany(EventActions);
  },

  getInitialState() {
    return this.store;
  },

  onfetchEventList() {
    this.store.events.loading = true;
    this.trigger(this.store);

  },
  onUpdateEventList(response) {
    this.store.events = {
      items: response,
      haveBeenFetched: true,
      loading: false
    };
    this.trigger(this.store);
  },

  onfetchEventById(id) {
    this.store.singles[id] = {loading: true};
    this.trigger(this.store);
  },

  onUpdateEventById(response) {
    this.store.singles[response.nid] = response;
    this.trigger(this.store);
  }
});

export default eventStore;
