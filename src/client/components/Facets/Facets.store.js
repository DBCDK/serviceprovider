'use strict';

import Reflux from 'reflux';

import FacetsActions from './Facets.action.js';

const FacetsStore = Reflux.createStore({

  store: {
    facets: null
  },

  init() {
    this.listenToMany(FacetsActions);
  },

  onUpdateFacets(facetsResponse) { // eslint-disable-line
    this.store.facets = facetsResponse.result;
    this.trigger(this.store);
  }

});

export default FacetsStore;
