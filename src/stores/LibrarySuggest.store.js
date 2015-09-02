'use strict';

import Reflux from 'reflux';
import React from 'react';

import LibrarySuggestAction from '../actions/LibrarySuggest.action.js';

const LibrarySuggestStore = Reflux.createStore({
  listenables: LibrarySuggestAction,
  store: {
    data: {},
    pending: false
  },

  parseResponse(response, data) {
    const index = response.index;
    const query = response.query || '';

    if (query === '') {
      return data;
    }

    if (!data[response.query]) {
      data[response.query] = {};
    }
    data[response.query][index] = {};

    if (response.docs.length > 0) {
      data[response.query][response.index] = {
        label: <a href={'/librarysuggest?text=' + query} >Biblioteker</a>,
        weight: 0,
        data: this.addLinks(response.docs)
      };
    }

    return data;
  },

  addLinks(data) {
    return data.map((value) => {
      let item = {};

      item.imageComp = <div></div>;

      item.text = (
        <div>
          <h6>{value.library.navn}</h6>
          <h6 className='subheader'>
            {value.library.adresse} {(value.library.postnr || value.library.by) ? '-' : ''} {value.library.postnr} {value.library.by}
          </h6>
        </div>
      );
      item.href = '/library?id=' + value.library.id;
      return item;
    });
  },

  onTextfieldUpdated(value) { // eslint-disable-line no-unused-vars
    this.store.pending = true;
    this.trigger(this.store);
  },

  onTextfieldUpdatedResponse(response) {
    let data = this.store.data;

    if (response.error) {
      console.error('EntitySuggest responded with an error: ', response); // eslint-disable-line
    }
    else if (response.isEmpty) {
      delete data[response.index];
    }
    else {
      data = this.parseResponse(response, data);
    }

    this.store.data = data;
    this.store.pending = false;
    this.trigger(this.store);
  },

  getInitialState() {
    return this.store;
  }
});

export default LibrarySuggestStore;

