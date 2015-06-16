'use strict';

import Reflux from 'reflux';
import Socket from 'socket.io-client';
import {filter} from 'lodash';
import QueryAction from './QueryUpdate.action.js';

const socket = Socket.connect();

let FilterActions = Reflux.createAction(
  {children: ['updated', 'failed']
});

function getQueryTextElements (query) {
  return filter(query, element => element.type === 'text')
    .map(element => element.value);
}

QueryAction.listen((query) => {
  socket.emit('getFilterGuidesRequest', getQueryTextElements(query).join(' '));
});

socket.on('getFilterGuidesResponse', (data) => {
  FilterActions.updated(data);
});

export default FilterActions;
