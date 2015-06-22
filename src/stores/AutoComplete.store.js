'use strict';

import Reflux from 'reflux';

import AutoCompleteActions from '../actions/AutoComplete.action.js';

const AutoCompleteStore = Reflux.createStore({
  listenables: AutoCompleteActions,
  _store: {
    data: {}
  },

  _parseResponse(response, data) {
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
      this._clearData();
    }
  },

  onTextfieldUpdatedResponse(response) {
    let data = this._store.data;

    if (response.error) {
      console.error('PopSuggest responded with an error: ', response); // eslint-disable-line
    }
    else if (response.isEmpty) {
      delete data[response.index];
    }
    else {
      data = this._parseResponse(response, data);
    }

    this._store.data = data;
    this.trigger(this._store);
  },

  _clearData() {
    this._store.data = {};
    this.trigger(this._store);
  },

  getInitialState() {
    return this._store;
  }
});

export default AutoCompleteStore;
