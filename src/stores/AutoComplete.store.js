'use strict';

import Reflux from 'reflux';

import AutoCompleteActions from '../actions/AutoComplete.action.js';
import QueryUpdate from '../actions/QueryUpdate.action.js';

const AutoCompleteStore = Reflux.createStore({
  listenables: AutoCompleteActions,
  store: {},

  init() {
    this.listenTo(QueryUpdate, this.clearData);
  },

  parseResponse(response, data) {
    const index = response.index;
    data[index] = {};

    switch (index) {
      case 'term.creator':
        let creators = response.docs;
        if (creators.length >= 1) {
          data[index].label = 'Forfatter';
          data[index].data = creators;
          data[index].weight = 1;
        }
        break;
      case 'term.title':
        let titles = response.docs;
        if (titles.length >= 1) {
          data[index].label = 'Titel';
          data[index].data = titles;
          data[index].weight = 0;
        }
        break;
      default:
        break;
    }

    return data;
  },

  onTextfieldUpdated(value) {
    if (value.length <= 0) {
      this.clearData();
    }
  },

  onTextfieldUpdatedResponse(response) {
    let data = this.store;

    if (response.error) {
      console.error('PopSuggest responded with an error: ', response); // eslint-disable-line
    }
    else if (response.isEmpty) {
      delete data[response.index];
    }
    else {
      data = this.parseResponse(response, data);
    }

    this.store = data;
    this.trigger(this.store);
  },

  onQueryUpdate(){
    console.log('queryUpdate');
  },

  clearData() {
    console.log('clearData');
    this.store = {};
    this.trigger(this.store);
  },

  getInitialState() {
    return this.store;
  }
});

export default AutoCompleteStore;
