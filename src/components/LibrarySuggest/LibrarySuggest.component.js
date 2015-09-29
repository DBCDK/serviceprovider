'use strict';

import React from 'react';
import Reflux from 'reflux';

// Components
import AutoCompleteContainer from '../autocomplete/AutocompleteContainer.component.js';
import {TokenSearchField} from 'dbc-react-components';

// Actions
import LibrarySuggestAction from '../../actions/LibrarySuggest.action.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import InputFieldActions from '../../actions/InputField.actions.js';

// Stores
import InputFieldStore from '../../stores/InputField.store.js';
import LibrarySuggestStore from '../../stores/LibrarySuggest.store.js';

const LibrarySuggestComponent = React.createClass({
  displayName: 'LibrarySuggest.component',

  propTypes: {
    placeholder: React.PropTypes.string,
    query: React.PropTypes.array.isRequired
  },

  mixins: [
    Reflux.connect(LibrarySuggestStore, 'suggest'),
    Reflux.connect(InputFieldStore, 'input')
  ],

  showPlaceholder() {
    return !(this.props.query && this.props.query.length);
  },

  render() {
    const placeholder = this.showPlaceholder() ? (this.props.placeholder || 'Søg efter biblioteker her') : '';
    return (
      <div className='searchfield' >
        <TokenSearchField
          change={InputFieldActions.change}
          focus={InputFieldActions.focus}
          pending={this.state.suggest.pending}
          placeholder={placeholder}
          query={this.props.query}
          update={QueryActions.update}
          />
        <AutoCompleteContainer actions={LibrarySuggestAction} input={this.state.input} store={this.state.suggest} />
      </div>
    );
  }
});

export default LibrarySuggestComponent;
