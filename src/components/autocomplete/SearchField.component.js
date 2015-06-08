'use strict';
import React from 'react';
import Socket from 'socket.io-client';
import Reflux from 'reflux';

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

  serviceResponse(data) {
    console.log('data', data); // eslint-disable-line no-console
  },

  onTextfieldUpdated(value) {
    socket.emit('getPopSuggestionsRequest', {index: value, fields: ['a', 'b', 'c']});
  },

  getInitialState() {
    return this._store;
  }
});

var SearchField = React.createClass({
  mixins: [Reflux.connect(store)],

  render() {
    const AutoComplete = this.props.autocomplete;
    const text = this.state.text || '';

    return (
      <div>
        <input type='text' placeholder='Søg og du skal finde' value={text} onChange={this._onchange}/>
        <AutoComplete />
      </div>
    );
  },

  _onchange(e) {
    const txt = e.target.value;
    actions.textfieldUpdated(txt);
    this.setState({text: txt});
  },

  propTypes: {
    autocomplete: React.PropTypes.func.isRequired
  }
});

export default SearchField;
