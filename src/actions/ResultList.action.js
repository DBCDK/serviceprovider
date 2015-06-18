'use strict';

import Reflux from 'reflux';
import QueryAction from './QueryUpdate.action.js';
import SocketClient from '../utils/ServiceProviderSocketClient.js';
import QueryParser from '../utils/QueryParser.util.js';

const event = SocketClient('getOpenSearchResultList');

let ResultListActions = Reflux.createAction({
  children: ['updated', 'failed']
});

QueryStore.listen((query) => {
  if (query.length > 0) {
    let q = QueryParser.objectToCql(query);
    event.request(q);
  } else {
    ResultListActions.updated([]);
  }
});

event.response(ResultListActions.updated);

export default ResultListActions;
