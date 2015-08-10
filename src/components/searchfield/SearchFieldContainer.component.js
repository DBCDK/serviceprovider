'use strict';

/**
 * @file
 * Container for the SearchField functionality, which contains a tokenized inputfield and an autocomplete
 */


import React from 'react';
import Reflux from 'reflux';

// Components
import AutoCompleteContainer from '../autocomplete/AutocompleteContainer.component.js';
import {TokenSearchField} from 'dbc-react-querystring';

// Actions
import AutoCompleteActions from '../../actions/AutoComplete.action.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import InputFieldActions from '../../actions/InputField.actions.js';

// Stores
import QueryStore from '../../stores/QueryStore.store.js';
import InputFieldStore from '../../stores/InputField.store.js';
import AutoCompleteStore from '../../stores/AutoComplete.store.js';

const SearchFieldContainerComponent = React.createClass({
  displayName: 'SearchFieldContainerComponent',

  mixins: [
    Reflux.connect(AutoCompleteStore, 'autocomplete'),
    Reflux.connect(InputFieldStore, 'input'),
    Reflux.connect(QueryStore, 'query')
  ],

  propTypes: {
    placeholder: React.PropTypes.string
  },

  showPlaceholder() {
    return !(this.state.query.query && this.state.query.query.length);
  },

  render() {
    const placeholder = this.showPlaceholder() ? (this.props.placeholder || 'Skriv dine søgeord her') : '';
    return (
      <div className='searchfield' >
        <TokenSearchField
          query={this.state.query.query}
          update={QueryActions.update}
          change={InputFieldActions.change}
          placeholder={placeholder}
          focus={InputFieldActions.focus}
          />
        <AutoCompleteContainer data={this.state.autocomplete} input={this.state.input} actions={AutoCompleteActions} />
      </div>
    );
  }
});

export default SearchFieldContainerComponent;
