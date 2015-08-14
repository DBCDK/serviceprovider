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
import FilterStore from '../../stores/FilterStore.store.js';


export default React.createClass({
  mixins: [
    Reflux.connect(FilterStore, 'filter')
  ],

  render() {
    return (
      <div className='filterguide--wrapper' >
        {this.state.filter.length && (<FilterGuide elements={this.state.filter} select={QueryActions.add} />) || ''}
      </div>
    );
  }
});
