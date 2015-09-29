'use strict';

/**
 * @file
 * Container for the SearchField functionality, which contains a tokenized inputfield and an autocomplete
 */


import React from 'react';
import Reflux from 'reflux';

// Components
import AutoCompleteContainer from '../autocomplete/AutocompleteContainer.component.js';
import {TokenSearchField} from 'dbc-react-components';

// Actions
import AutoCompleteActions from '../../actions/AutoComplete.action.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import InputFieldActions from '../../actions/InputField.actions.js';

// Stores
import QueryStore from '../../stores/QueryStore.store.js';
import InputFieldStore from '../../stores/InputField.store.js';
import AutoCompleteStore from '../../stores/AutoComplete.store.js';
import MaterialTypeStore from '../../stores/MaterialType.store.js';


const SearchFieldContainerComponent = React.createClass({
  displayName: 'SearchFieldContainer.component',

  propTypes: {
    placeholder: React.PropTypes.string,
    query: React.PropTypes.array
  },

  mixins: [
    Reflux.connect(AutoCompleteStore, 'autocomplete'),
    Reflux.connect(InputFieldStore, 'input'),
    Reflux.connect(QueryStore, 'query'),
    Reflux.connect(MaterialTypeStore, 'categories')
  ],

  showPlaceholder() {
    if (typeof window === 'undefined') {
      return !(this.props.query && this.props.query.length);
    }

    return !(this.state.query.query && this.state.query.query.length);
  },

  render() {
    const placeholder = this.showPlaceholder() ? (this.props.placeholder || 'Skriv dine søgeord her') : '';
    return (
      <div className='searchfield--container' >
        <TokenSearchField
          change={InputFieldActions.change}
          focus={InputFieldActions.focus}
          pending={this.state.autocomplete.pending}
          placeholder={placeholder}
          query={typeof window !== 'undefined' ? this.state.query.query : this.props.query}
          translations={this.state.categories.translations}
          update={QueryActions.update}
          />
        <AutoCompleteContainer actions={AutoCompleteActions} input={this.state.input} store={this.state.autocomplete} />
      </div>
    );
  }
});

export default SearchFieldContainerComponent;
