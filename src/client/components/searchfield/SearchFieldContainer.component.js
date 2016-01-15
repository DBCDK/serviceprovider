'use strict';

/**
 * @file
 * Container for the SearchField functionality, which contains a tokenized inputfield and an autocomplete
 */

import React, {PropTypes} from 'react';

// Components
import AutoCompleteContainer from '../AutoComplete/AutocompleteContainer.component.js';
import TokenSearchField from '../TokenSearchField/TokenSearchField.component';

// Actions
import AutoCompleteActions from '../AutoComplete/AutoComplete.action.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import InputFieldActions from '../../actions/InputField.actions.js';

// Stores
import QueryStore from '../../stores/QueryStore.store.js';
import InputFieldStore from '../../stores/InputField.store.js';
import AutoCompleteStore from '../AutoComplete/AutoComplete.store.js';
import MaterialTypeStore from '../../stores/MaterialType.store.js';


class SearchFieldContainerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autocomplete: AutoCompleteStore.getInitialState(),
      input: InputFieldStore.getInitialState(),
      query: QueryStore.getInitialState(),
      categories: MaterialTypeStore.getInitialState()
    };

    this.unsubscribe = [
      AutoCompleteStore.listen(
        () => this.setState({
          autocomplete: AutoCompleteStore.store
        })
      ),
      InputFieldStore.listen(
        () => this.setState({
          input: InputFieldStore.store
        })
      ),
      QueryStore.listen(
        () => this.setState({
          query: QueryStore.store
        })
      ),
      MaterialTypeStore.listen(
        () => this.setState({
          categories: MaterialTypeStore.store
        })
      )
    ];

    this.showPlaceholder.bind(this);

    if (props.query) {
      this.state.query.query = this.state.query.query ? this.state.query.query: props.query;
    }
  }

  componentWillUnmount() {
    this.unsubscribe.forEach((unsubscriber) => {
      unsubscriber();
    });
  }

  showPlaceholder() {
    return !(this.state.query.query && this.state.query.query.length);
  }

  render() {
    const placeholder = this.showPlaceholder() ? (this.props.placeholder || 'Skriv dine søgeord her') : '';
    return (
      <div className='searchfield--container' >
        <TokenSearchField
          hasFocus={this.state.input.focus}
          change={InputFieldActions.change}
          focus={InputFieldActions.focus}
          pending={this.state.autocomplete.pending}
          placeholder={placeholder}
          query={this.state.query.query}
          translations={this.state.categories.translations}
          update={QueryActions.update}
          />
        <AutoCompleteContainer actions={AutoCompleteActions} input={this.state.input} store={this.state.autocomplete} />
      </div>
    );
  }
}

SearchFieldContainerComponent.displayName = 'SearchFieldContainer.component';
SearchFieldContainerComponent.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.array
};

export default SearchFieldContainerComponent;
