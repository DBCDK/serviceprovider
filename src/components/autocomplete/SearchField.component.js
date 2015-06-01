'use strict';
import React from 'react';

var SearchField = React.createClass({
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
