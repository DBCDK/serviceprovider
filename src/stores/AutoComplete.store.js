'use strict';

import Reflux from 'reflux';
import React from 'react';

import AutoCompleteActions from '../actions/AutoComplete.action.js';
import {CoverImage} from 'dbc-react-components';

import {rewriteCoverImageUrl} from '../utils/CoverImage.util.js';

const AutoCompleteStore = Reflux.createStore({
  listenables: AutoCompleteActions,
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

    switch (index) {
      case 'display.creator':
        let creators = response.docs;
        if (creators.length >= 1) {
          data[response.query][index] = {
            label: <a href={'/search?term.creator=' + query} >Forfatter</a>,
            data: this.addLinks(creators, index),
            weight: 1
          };
        }
        break;
      case 'display.title':
        let titles = response.docs;
        if (titles.length >= 1) {
          data[response.query][index] = {
            label: <a href={'/search?term.title=' + query} >Titel</a>,
            data: this.addLinks(titles, index),
            weight: 0
          };
        }
        break;
      case 'term.subject':
        let subjects = response.docs;
        if (subjects.length >= 1) {
          data[response.query][index] = {
            label: <a href={'/search?term.subject=' + query} >Emne</a>,
            data: this.addLinks(subjects, index),
            weight: 2
          };
        }
        break;
      default:
        break;
    }

    return data;
  },

  addLinks(data, index) {
    return data.map((value) => {
      let item = {};

      const pids = value.pid ? [value.pid] : null;
      item.imageComp = (
        <CoverImage noCoverUrl={'/covers/no-cover-image-other.png'} pids={pids} prefSize={'detail_117'} rewriteImgUrl={rewriteCoverImageUrl} />
      );

      item.text = value.text;
      if (value.pid) {
        item.href = '/work?id=' + value.pid;
      }
      else {
        item.href = '/search?' + index.replace('display', 'term') + '=' + value.text;
      }
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
      console.error('PopSuggest responded with an error: ', response); // eslint-disable-line
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

export default AutoCompleteStore;
