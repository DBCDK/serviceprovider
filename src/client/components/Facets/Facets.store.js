'use strict';

import Reflux from 'reflux';
import {values} from 'lodash';

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
  },

  onUpdateSingleFacet(res) {
    let facetObject = {};
    this.store.facets.forEach((facet) => {
      facetObject[facet.facetName] = facet;
    });

    facetObject[res.result.facetName] = res.result;
    this.store.facets = values(facetObject);
    this.trigger(this.store);
  }
});

export default FacetsStore;
