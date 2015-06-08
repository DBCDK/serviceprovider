'use strict';
import React from 'react';
import Socket from 'socket.io-client';
import Reflux from 'reflux';

const socket = Socket.connect();

const actions = Reflux.createActions(
  ['textfieldUpdated']
);

const dummyData = [{
  label: 'Title',
  data: [
    {
      text: 'Test Hest',
      img: 'http://dummyimage.com/50x50/000/fff'
    },
    {
      text: 'Hest Hest',
      img: 'http://dummyimage.com/50x50/000/fff'
    },
    {
      text: 'Fest Hest',
      img: 'http://dummyimage.com/50x50/000/fff'
    },
    {
      text: 'Gæst Hest',
      img: 'http://dummyimage.com/50x50/000/fff'
    }
  ]
},
  {
    label: 'Author',
    data: [
      {
        text: 'Test Hest',
        img: 'http://dummyimage.com/50x50/000/fff'
      },
      {
        text: 'Hest Hest',
        img: ''
      },
      {
        text: 'Fest Hest',
        img: ''
      },
      {
        text: 'Gæst Hest',
        img: ''
      }
    ]
  }];

const store = Reflux.createStore({
  listenables: [actions],

  _store: {
    data: []
  },

  init() {
    socket.on('getPopSuggestionsResponse', this.serviceResponse);
  },

  serviceResponse() {
    // console.log('data', data); // eslint-disable-line no-console
    this._store.data = dummyData;
    this.trigger(this._store);
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
    const data = this.state.data || [];
    const autoCompleteVisible = (data.length >= 1 && text.length >= 1);

    return (
      <div>
        <input type='text' placeholder='Søg og du skal finde' value={text} onChange={this._onchange} className={'search-input'}/>
        <AutoComplete data={data} visible={autoCompleteVisible}/>
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
