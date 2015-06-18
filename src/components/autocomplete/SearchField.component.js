'use strict';
import React from 'react';
import Socket from 'socket.io-client';
import Reflux from 'reflux';
import {isEmpty, sortBy} from 'lodash';

const socket = Socket.connect();

const actions = Reflux.createActions(
  ['textfieldUpdated']
);

const store = Reflux.createStore({
  listenables: [actions],

  _store: {
    data: {}
  },

  init() {
    socket.on('getPopSuggestionsResponse', this.serviceResponse);
  },

  serviceResponse(response) {
    let data = this._store.data;
    if (response.error) {
      console.error('PopSuggest responded with an error: ', response);
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

  _parseResponse(response, data) {
    const index = response.index;
    data[index] = {};

    switch (index) {
      case 'term.creator':
        let creators = this._getCreator(response);
        if (creators.length >= 1) {
          data[index].label = 'Forfatter';
          data[index].data = creators;
          data[index].weight = 1;
        }
        break;
      case 'term.title':
        let titles = this._getTitles(response);
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

  _getCreator: function(response) {
    let creators = [];
    let counter = 0;
    response.docs.forEach((value) => {
      if (value['display.creator'] && counter < 5) {
        creators.push({
          text: value['display.creator'].join()
        });
        counter++;
      }
    });

    return creators;
  },

  _getTitles: function(response) {
    let titles = [];
    let counter = 0;
    response.docs.forEach((value) => {
      if (value['display.title'] && counter < 5) {
        titles.push({
          text: value['display.title'].join(),
          img: 'http://dummyimage.com/50x50/000/fff'
        });
        counter++;
      }
    });

    return titles;
  },

  onTextfieldUpdated(value) {
    if (value.length >= 1) {
      socket.emit('getPopSuggestionsRequest', value);
    }
    else {
      this._clearData();
    }
  },

  _clearData() {
    this._store.data = {};
    this.trigger(this._store);
  },

  getInitialState() {
    return this._store;
  }
});

var SearchField = React.createClass({
  mixins: [Reflux.connect(store)],
  timer: null,

  render() {
    const AutoComplete = this.props.autocomplete;
    const text = this.state.text || '';
    const data = this.state.data || {};
    const autoCompleteVisible = !isEmpty(data);

    return (
      <div>
        <input type='text' placeholder='Søg og du skal finde' value={text} onChange={this._handleOnChange} onKeyUp={this._handleOnKeyUp} className={'search-input'}/>
        <AutoComplete data={data} visible={autoCompleteVisible}/>
      </div>
    );
  },

  _handleOnChange(e) {
    const txt = e.target.value;
    this.setState({text: txt});
  },

  _handleOnKeyUp() {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      actions.textfieldUpdated(this.state.text);
    }, 150);
  },

  propTypes: {
    autocomplete: React.PropTypes.func.isRequired
  }
});

export default SearchField;
