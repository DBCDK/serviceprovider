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

  categories: [
    {type: 'term.workType', value: 'Movie', displayValue: 'Film', cssClass: 'worktype'},
    {type: 'term.workType', value: 'Literature', displayValue: 'Bog', cssClass: 'worktype'},
    {type: 'term.type', value: 'Lydbog', cssClass: 'worktype'},
    {type: 'term.workType', value: 'Music', displayValue: 'Musik', cssClass: 'worktype'},
    {type: 'term.workType', value: 'Game', displayValue: 'Spil', cssClass: 'worktype'}
  ],

  render() {
    return (
      <div className='filterguide--wrapper' >
        {this.state.filter.length && (<FilterGuide categories={this.categories} elements={this.state.filter} select={QueryActions.add} />) || ''}
      </div>
    );
  }
});
