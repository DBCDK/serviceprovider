'use strict';

/**
 * @file
 * Store for handling list of work elements
 */

import Reflux from 'reflux';
import workListActions from '../actions/WorkList.action.js';

const WorkListStore = Reflux.createStore({
  store: {
    elements: []
  },

  init() {
    this.listenToMany(workListActions);
  },

  onListLoaded(data) {
    this.store.elements = data.works;
    this.trigger(this.store);
  }
});

export default WorkListStore;
