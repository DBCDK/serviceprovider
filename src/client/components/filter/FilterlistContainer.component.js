'use strict';
/**
 * @file
 * Container for the FilterGuide Component
 */

import React from 'react';
import Reflux from 'reflux';

// Components
import {FilterGuide} from 'dbc-react-components';


// Actions
import QueryActions from '../../actions/QueryUpdate.action.js';

// Stores
import FilterStore from '../../stores/FilterStore.store.js'; // eslint-disable-line no-unused-vars
import MaterialTypeStore from '../../stores/MaterialType.store.js';

export default React.createClass({
  displayName: 'FilterListContainer',
  mixins: [
    Reflux.connect(MaterialTypeStore, 'categories')
  ],

  render() {
    const filterGuide = (<FilterGuide categories={this.state.categories.categories} elements={this.state.filter} select={QueryActions.add} />) || '';
    return (
      <div className='filterguide--wrapper' >
        {filterGuide}
      </div>
    );
  }
});
