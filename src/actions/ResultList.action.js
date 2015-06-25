'use strict';

import Reflux from 'reflux';
import SocketClient from '../utils/ServiceProviderSocketClient.js';
import QueryParser from '../utils/QueryParser.util.js';

const event = SocketClient('getOpenSearchResultList');

let ResultListActions = Reflux.createAction({
  children: ['clear', 'pending', 'updated', 'failed']
});

ResultListActions.listen((res) => {
  ResultListActions.pending();
  const {query, page, worksPerPage, sort} = res;
  const offset = page * worksPerPage;
  if (query.length > 0) {
    let q = QueryParser.objectToCql(query);
    event.request({query: q, offset, worksPerPage, sort});
  }
  else {
    ResultListActions.updated([]);
  }
});

event.response((data) => {
  ResultListActions.updated(data)});

export default ResultListActions;
