'use strict';

import Reflux from 'reflux';
import _ from 'lodash';

import AutoCompleteActions from '../actions/AutoComplete.action.js';
import QueryUpdate from '../actions/QueryUpdate.action.js';
import CoverImageActions from '../actions/CoverImage.action.js';
import CoverImageStore from '../stores/CoverImage.store.js';

const AutoCompleteStore = Reflux.createStore({
  listenables: AutoCompleteActions,
  store: {},

  init() {
    this.listenTo(QueryUpdate.update, this.clearData);
    CoverImageStore.listen(this.updateCoverImages);
  },

  parseResponse(response, data) {
    const index = response.index;
    const query = response.query || '';
    if (!data[response.query]) {
      data[response.query] = {};
    }
    data[response.query][index] = {};

    switch (index) {
      case 'display.creator':
        let creators = response.docs;
        if (creators.length >= 1) {
          data[response.query][index] = {
            label: <a href={'/search?term.creator=' + query}>Forfatter</a>,
            data: this.addLinks(creators, index),
            weight: 1
          };
        }
        break;
      case 'display.title':
        let titles = response.docs;
        if (titles.length >= 1) {
          data[response.query][index] = {
            label: <a href={'/search?term.title=' + query}>Titel</a>,
            data: this.addLinks(titles, index),
            weight: 0
          };
        }
        break;
      case 'term.subject':
        let subjects = response.docs;
        if (subjects.length >= 1) {
          data[response.query][index] = {
            label: <a href={'/search?term.subject=' + query}>Emne</a>,
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
      value.image = '/covers/no-cover-image-other.png';
      if (value.pid) {
        CoverImageActions([value.pid]);
        value.href = '/work?pid=' + value.pid;
      }
      else {
        value.href = '/search?' + index.replace('display', 'term') + '=' + value.text;
      }
      return value;
    });
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
  onClear() {
    this.clearData();
  },

  clearData() {
    this.store = {};
    this.trigger(this.store);
  },

  updateCoverImages(covers) {
    let shouldTrigger = false;
    _.map(this.store, (val) => {
      _.map(val, (_val) => {
        _.map(_val.data, (dat) => {
          if (dat.pid && covers.images.get(dat.pid)) {
            dat.image = this.extractImageUrl(covers.images.get(dat.pid));
            shouldTrigger = true;
          }
        });
      });
    });

    if (shouldTrigger) {
      this.trigger(this.store);
    }
  },

  extractImageUrl(images) {
    const imageArr = images.images;
    let imageUrl = '/covers/no-cover-image-other.png';
    if (images.images.length) {
      imageUrl = imageArr.filter((image) => image.size === 'detail_117').pop().url;
    }
    return imageUrl;
  },

  getInitialState() {
    return this.store;
  }
});

export default AutoCompleteStore;
