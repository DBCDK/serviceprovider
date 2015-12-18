'use strict';

import Reflux from 'reflux';

import FacetsActions from './Facets.action.js';

const FacetsStore = Reflux.createStore({

  store: {
    facets: []
  },

  init() {
    this.listenToMany(FacetsActions);
  },

  onUpdateFacets(facetsResponse) {
    this.store.facets = facetsResponse.result;
    this.trigger(this.store);
  }

});

export default FacetsStore;
