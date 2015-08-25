'use strict';

import Reflux from 'reflux';
import {contains} from 'lodash';
import QueryStore from './QueryStore.store.js';
import ResultList from './ResultList.store.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object

let MaterialTypeStore = Reflux.createStore({
  categories: [],

  getInitialState() {
    return this.checkForQueryContent(this.categories);
  },

  init() {
    this.listenTo(QueryStore, this.onQueryUpdated(this));
    this.listenTo(ResultList, this.onResponse(this));
  },

  onQueryUpdated(self) {
    // Return closure function in order to get correct "this" context from action
    return function (store) {
      self.categories = self.checkForQueryContent(self.categories, store);
      self.trigger(self.categories);
    };
  },

  onResponse(self) {
    return function(result) {
      if (!result.pending && result.info.facets) {
        self.categories = self.checkForQueryContent(result.info.facets);
        self.trigger(self.categories);
      }
    };
  },

  checkForQueryContent(categories, queryStore) {
    let qStore = (typeof queryStore === 'undefined') ? QueryStore.getInitialState() : queryStore;
    if (qStore.query.length > 0) {
      qStore.query.forEach(function(queryElement) {
        if (contains(queryElement.type, 'term')) {
          categories = [];
        }
      });
    }

    return categories;
  }
});

export default MaterialTypeStore;
