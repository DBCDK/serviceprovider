'use strict';

import Reflux from 'reflux';
import {contains} from 'lodash';
import QueryStore from './QueryStore.store.js';
import ResultList from './ResultList.store.js';

// Setup dataobject for query
// @todo We may need to initialize it with data from the URL or an global object

const translations = {
  music: 'Musik',
  movie: 'Film',
  literature: 'Bøger',
  game: 'Spil',
  periodica: 'Tidsskrifter',
  track: 'Tracks',
  article: 'Artikler',
  sheetmusic: 'Noder',
  map: 'Kort',
  review: 'Anmeldelser',
  bookdescription: 'Bogbeskrivelser'
};

function translateCategories(category) {
  category.displayValue = translations[category.displayValue] || category.displayValue;
  return category;
}

let MaterialTypeStore = Reflux.createStore({
  store: {
    categories: [],
    translations: translations
  },

  getInitialState() {
    this.store.categories = this.checkForQueryContent(this.store.categories);
    return this.store;
  },

  init() {
    this.listenTo(QueryStore, this.onQueryUpdated(this));
    this.listenTo(ResultList, this.onResponse(this));
  },

  onQueryUpdated(self) {
    // Return closure function in order to get correct "this" context from action
    return (store) => {
      self.store.categories = self.checkForQueryContent(self.store.categories, store).map(translateCategories);
      self.trigger(self.store);
    };
  },

  onResponse(self) {
    return (result) => {
      if (!result.pending && result.info.facets) {
        self.store.categories = self.checkForQueryContent(result.info.facets).map(translateCategories);
        self.trigger(self.store);
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
