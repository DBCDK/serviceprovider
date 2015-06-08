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
    text: '',
    data: {}
  },

  onTextfieldUpdated(value) {
    console.log(value);
    this.trigger(this._store);
  },

  getInitialState() {
    return this._store;
  }
});

/*
 socket.on('getPopSuggestionsResponse', (data) => {
 console.log(data); // eslint-disable-line no-console
 });
 socket.emit('getPopSuggestionsRequest', {index: 'hest', fields: ['a', 'b', 'c']});
 */

var SearchField = React.createClass({
  mixins: [Reflux.connect(store)],

  render() {
    const AutoComplete = this.props.autocomplete;
    return (
      <div>
        <input type='text' placeholder='Søg og du skal finde' value={this.state.text} onChange={this._onchange}/>
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
