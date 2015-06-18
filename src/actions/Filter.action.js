'use strict';

import Reflux from 'reflux';
import {filter} from 'lodash';
import QueryAction from './QueryUpdate.action.js';
import SocketClient from '../utils/ServiceProviderSocketClient.js';

const event = SocketClient('getFilterGuides');

let FilterActions = Reflux.createAction({
  children: ['updated', 'failed']
});

function getQueryTextElements(query) {
  return filter(query, element => element.type === 'text')
    .map(element => element.value);
}

QueryAction.listen((query) => {
  if (query.length > 0) {
    let q = getQueryTextElements(query).join(' ');
    event.request(q);
  } else {
    FilterActions.updated([]);
  }
});

event.response(FilterActions.updated);

export default FilterActions;
