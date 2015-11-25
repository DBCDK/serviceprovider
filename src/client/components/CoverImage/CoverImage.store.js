'use strict';

import Reflux from 'reflux';
import CoverImageActions from './CoverImage.action.js';

let store = {};

const CoverImageStore = Reflux.createStore({
  getState: function() {
    return store;
  },

  init: function() {
    this.listenTo(CoverImageActions.updated, this.update);
  },

  update(response) {
    const pid = response.identifiers.toString();
    store[pid] = response.result.images;
    this.pushStore();
  },

  pushStore: function() {
    this.trigger(store);
  }
});

export default CoverImageStore;
