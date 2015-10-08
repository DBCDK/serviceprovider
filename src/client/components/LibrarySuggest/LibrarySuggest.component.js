'use strict';

import React, {PropTypes} from 'react';

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

class LibrarySuggestComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      input: InputFieldStore.store,
      suggest: LibrarySuggestStore.store
    };

    this.unsubscribe = [
      InputFieldStore.listen(
        () => this.setState({
          input: InputFieldStore.store
        })
      ),
      LibrarySuggestStore.listen(
        () => this.setState({
          suggest: LibrarySuggestStore.store
        })
      )
    ];
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  showPlaceholder() {
    return !(this.props.query && this.props.query.length);
  }

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
}

LibrarySuggestComponent.displayName = 'LibrarySuggest.component';
LibrarySuggestComponent.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.array.isRequired
};

export default LibrarySuggestComponent;
