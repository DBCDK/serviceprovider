'use strict';

import Reflux from 'reflux';
import Socket from 'socket.io-client';
import {filter} from 'lodash';
import QueryAction from './QueryUpdate.action.js';

const socket = Socket.connect();

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
    socket.emit('getFilterGuidesRequest', q);
  } else {
    FilterActions.updated([]);
  }

});

socket.on('getFilterGuidesResponse', (data) => {
  FilterActions.updated(data);
});

export default FilterActions;
