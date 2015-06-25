'use strict';

import Reflux from 'reflux';
import SocketClient from '../utils/ServiceProviderSocketClient.js';
import QueryParser from '../utils/QueryParser.util.js';

const event = SocketClient('getOpenSearchResultList');

let ResultListActions = Reflux.createAction({
  children: ['pending', 'updated', 'failed']
});

ResultListActions.listen((res) => {
  if (res.query.length > 0) {
    let q = QueryParser.objectToCql(res.query);
    event.request({query: q, offset: res.offset, worksPerPage: res.worksPerPage, sort: 'default'});
  }
  else {
    ResultListActions.updated([]);
  }
});

event.response(ResultListActions.updated);

export default ResultListActions;
