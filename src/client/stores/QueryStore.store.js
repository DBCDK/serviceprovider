'use strict';

import Reflux from 'reflux';
import {extend, isString} from 'lodash';
import QueryParser from '../../utils/QueryParser.util.js';
import QueryActions from '../actions/QueryUpdate.action.js';
import {inHTMLData} from 'xss-filters';

const defaultStore = {
  queryHasChanged: false,
  query: [],
  page: 0,
  worksPerPage: 12,
  search: '',
  sort: 'default'
};

/**
 * Store containing the current query of the page
 */
let QueryStore = Reflux.createStore({
  store: {
    queryHasChanged: false,
    query: [],
    page: 0,
    worksPerPage: 12,
    search: '',
    sort: typeof localStorage !== 'undefined' && localStorage.getItem('defaultSearchSort') || 'default'
  },

  listenables: QueryActions,

  triggerOnQueryChange() {
    this.store.search = this.store.query.length && `?${QueryParser.objectToString(this.store.query)}` || '';
    this.store.queryHasChanged = true;
    this.trigger(this.store);
    return this.store;
  },

  setStore(newStore) {
    this.store = newStore;
  },

  getInitialState() {
    return this.store;
  },

  init() {
    if (typeof window !== 'undefined') {
      // pass window.location through xss filter
      this.store.query = QueryParser.urlQueryToObject(inHTMLData(window.location.search));
      return this.triggerOnQueryChange(this.store);
    }
  },

  onReset() {
    this.store = extend({}, defaultStore);
    this.triggerOnQueryChange(this.store);
  },

  onUpdate(query) {
    this.store.query = isString(query) && QueryParser.urlQueryToObject(query) || query;
    this.store.page = 0;
    this.triggerOnQueryChange(this.store);
  },

  onRemove(queryElement) {
    let removedElements = [];
    this.store.query = this.store.query.filter((element) => {
      const shouldKeep = !( // if the conditions are true, don't keep the element.
        queryElement.type === element.type && // Check that the types are the same.
        (queryElement.value.length === 0 || queryElement.value === element.value) // Check that the length of the value is 0, or the values are identical.
      );
      if (!shouldKeep) {
        removedElements.push(element);
      }

      return shouldKeep;
    });

    this.store.page = 0;
    this.triggerOnQueryChange(this.store);
    removedElements.forEach((element) => QueryActions.queryElementWasRemoved(element));
  },

  onAdd(queryElement) {
    this.store.query.push(queryElement);
    this.store.page = 0;
    this.triggerOnQueryChange(this.store);
  },

  onLoadMore() {
    this.onNextPage();
  },

  onNextPage() {
    this.store.page++;
    this.triggerOnQueryChange();
  },

  onPrevPage() {
    this.store.page--;
    this.triggerOnQueryChange();
  },

  onChangedInput(inputValue) {
    this.store.queryHasChanged = false;
    this.store.inputValue = inputValue;
    this.trigger(this.store);
  },

  getCql() {
    return QueryParser.objectToCql(this.store.query);
  },

  onChangeQuerySort(new_sort) {
    const sorts = [
      'acquisitionDate_ascending', 'acquisitionDate_descending', 'article_date_ascending', 'article_date_descending',
      'creator_ascending', 'creator_descending', 'date_ascending', 'date_descending', 'random', 'rank_creator',
      'rank_frequency', 'rank_general', 'rank_main_title', 'rank_none', 'rank_subject', 'rank_title', 'record_owner_ascending',
      'record_owner_descending', 'title_ascending', 'title_descending', 'work_type_ascending', 'work_type_descending'
    ];

    if (sorts.indexOf(new_sort) >= 0) {
      this.store.sort = new_sort;
      this.trigger(this.store);
    }
  }
});

export default QueryStore;
