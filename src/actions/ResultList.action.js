'use strict';

import Reflux from 'reflux';
import SocketClient from '../utils/ServiceProviderSocketClient.js';
import QueryParser from '../utils/QueryParser.util.js';
import QueryStore from '../stores/QueryStore.store.js';

const event = SocketClient('getOpenSearchResultList');

let ResultListActions = Reflux.createAction({
  children: ['updated', 'failed']
});

QueryStore.listen((query) => {
  if (query.length > 0) {
    let q = QueryParser.objectToCql(query);
    event.request({query: q, offset: 1, stepValue: 10, sort: 'default'});
  }
  else {
    ResultListActions.updated([]);
  }
});

event.response(ResultListActions.updated);

export default ResultListActions;
