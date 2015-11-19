'use strict';

/**
 * @file
 * Profile Actions
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const getNewsList = SocketClient('getNewsList');

const NewsActions = Reflux.createActions([
  'fetchNewsList',
  'updateNewsList'
]);

NewsActions.fetchNewsList.listen(getNewsList.request);
getNewsList.response(NewsActions.updateNewsList);

export default NewsActions;
