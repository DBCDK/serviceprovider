'use strict';

import Reflux from 'reflux';
import SocketClient from '../utils/ServiceProviderSocketClient.js';
import QueryParser from '../utils/QueryParser.util.js';
import QueryStore from '../stores/QueryStore.store.js';
import ResultListStore from '../stores/ResultList.store.js';

const event = SocketClient('getOpenSearchResultList');

let ResultListActions = Reflux.createAction({
  children: ['pending', 'updated', 'failed']
});

QueryStore.listen((query) => {
  if (query.length > 0) {
    let q = QueryParser.objectToCql(query);
    ResultListActions.pending(true);
    let res = ResultListStore.getStore();
    event.request({query: q, offset: res.offset, worksPerPage: res.worksPerPage, sort: 'default'});
  }
  else {
    ResultListActions.updated([]);
  }
});

event.response(ResultListActions.updated);

export default ResultListActions;
