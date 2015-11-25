'use strict';

import React, {PropTypes} from 'react';

// Components
import TokenSearchField from '../../TokenSearchField/TokenSearchField.component';

// Actions
import QueryActions from '../../../actions/QueryUpdate.action.js';
import InputFieldActions from '../../../actions/InputField.actions.js';

// Stores
import InputFieldStore from '../../../stores/InputField.store.js';

class GroupSearchComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      input: InputFieldStore.store
    };

    this.unsubscribe = [
      InputFieldStore.listen(
        () => this.setState({
          input: InputFieldStore.store
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
    const placeholder = this.showPlaceholder() ? (this.props.placeholder || 'Søg efter grupper her') : '';
    return (
      <div className='searchfield' >
        <TokenSearchField
          change={InputFieldActions.change}
          focus={InputFieldActions.focus}
          pending={false}
          placeholder={placeholder}
          query={this.props.query}
          update={QueryActions.update}
          />
      </div>
    );
  }
}

GroupSearchComponent.displayName = 'GroupSearch.component';
GroupSearchComponent.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.array.isRequired
};

export default GroupSearchComponent;
