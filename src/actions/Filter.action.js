'use strict';

import Reflux from 'reflux';
import {filter} from 'lodash';
import QueryAction from './QueryUpdate.action.js';
import SocketClient from '../utils/ServiceProviderSocketClient.js';

// Register an event related to a transform in the serviceprovider
// The event object has a request and response method
const event = SocketClient('getFilterGuides');

/**
 * FilterActions is an asyncronous action. It is activated when the Query is changing.
 * When a result is returned FilterActions.updated is triggered
 */
const FilterActions = Reflux.createAction({
  children: ['updated', 'failed']
});

/**
 * Convert query objects to a text string, filtering all elements with type = text
 *
 * @param {Array} query
 * @returns {Array}
 */
function getQueryTextElements(query) {
  return filter(query, element => element.type === 'text')
    .map(element => element.value);
}

/**
 * Emits a request with a query
 *
 * If query is empty FilterActions is updated with an empty array
 *
 * @param query
 */
function getFilterElements(query) {
  if (query.length > 0) {
    let q = getQueryTextElements(query).join(' ');
    event.request(q);
  }
  else {
    FilterActions.updated([]);
  }
}

// Listens to actions that should update the Filter elements
FilterActions.listen(getFilterElements);
QueryAction.listen(getFilterElements);

// Listens for a response with filter elements
event.response(FilterActions.updated);

export default FilterActions;
