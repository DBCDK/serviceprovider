'use strict';
import React from 'react';
import Socket from 'socket.io-client';
const socket = Socket.connect();

var SearchField = React.createClass({
  componentDidMount(){
    console.log('componentDidMount');
    socket.emit('getPopSuggestionsRequest', {test: 'hest'});
  },

  getInitialState() {
    return {text: (this.props.initialValue) ? this.props.initialValue : ''};
  },

  render() {
    return (
      <div>
        <input type='text' placeholder='Søg og du skal finde' value={this.state.text} onChange={this._onchange}/>
      </div>
    );
  },

  _onchange(e) {
    const txt = e.target.value;
    this.setState({text: txt});
  }
});

export default SearchField;
