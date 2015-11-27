'use strict';

import Reflux from 'reflux';
import CoverImageActions from './CoverImage.action.js';

const CoverImageStore = Reflux.createStore({
  store: {},

  getState: function() {
    return this.store;
  },

  init: function() {
    this.listenTo(CoverImageActions.updated, this.update);
  },

  update(response) {
    const pid = response.identifiers.toString();
    this.store[pid] = response.result.images;
    this.pushStore();
  },

  pushStore: function() {
    this.trigger(this.store);
  }
});

export default CoverImageStore;
