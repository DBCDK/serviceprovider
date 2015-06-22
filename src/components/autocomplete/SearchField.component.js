'use strict';
import React from 'react';
import Reflux from 'reflux';
import {isEmpty} from 'lodash';

// importing actions and stores
import AutoCompleteActions from '../../actions/AutoComplete.action.js';
import AutoCompleteStore from '../../stores/AutoComplete.store.js';


var SearchField = React.createClass({
  mixins: [Reflux.connect(AutoCompleteStore)],
  timer: null,

  render() {
    const AutoComplete = this.props.autocomplete;
    const text = this.state.text || '';
    const data = this.state.data || {};
    const autoCompleteVisible = (!isEmpty(data) && !isEmpty(text));

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
      AutoCompleteActions.textfieldUpdated(this.state.text);
    }, 150);
  },

  propTypes: {
    autocomplete: React.PropTypes.func.isRequired
  }
});

export default SearchField;
