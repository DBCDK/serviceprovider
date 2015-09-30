'use strict';

import Reflux from 'reflux';

import QueryStore from './QueryStore.store.js';
import GroupSearchAction from '../actions/GroupSearch.action.js';

const GroupSearchStore = Reflux.createStore({
  listenables: GroupSearchAction,

  store: {
    data: [],
    pending: false
  },

  init() {
    this.listenTo(QueryStore, this.onQueryUpdated);
  },

  groupQueryUpdatedResponse(data) {
    this.store.pending = false;
    if (!data.error) {
      this.store.data = data.groups ? data.groups : [];
    }
    this.trigger(this.store);
  },

  onQueryUpdated(store) {
    GroupSearchAction.groupQueryUpdated.trigger(store.query.map((val) => {
      return val.value;
    }).join(' '));
    this.store.pending = true;
    this.trigger(this.store);
  },

  getInitialState() {
    if (typeof window !== 'undefined' && window.QUERYSTRING_PROPS && window.QUERYSTRING_PROPS !== 'undefined') {
      GroupSearchAction.groupQueryUpdated.trigger(window.QUERYSTRING_PROPS.text);
      this.store.pending = true;
    }
    return this.store;
  }
});

export default GroupSearchStore;
