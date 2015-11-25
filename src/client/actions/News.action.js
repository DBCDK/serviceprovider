'use strict';

/**
 * @file
 * News Actions. Used for fetching a list of or single news
 *
 * @method fetchNewslist
 * Fetches a list of news, takes amount and sort as arguments
 *
 * @method fetchNewsById
 * Fetches a single news object, takes node (id of the node) as argument
 *
 * @method updateNewslist/updateNewsById
 * Returns results from serviceprovider
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const getNewsList = SocketClient('getNewsList');
const getNewsById = SocketClient('getNewsById');

const NewsActions = Reflux.createActions([
  'fetchNewsList',
  'updateNewsList',
  'fetchNewsById',
  'updateNewsById'
]);

NewsActions.fetchNewsList.listen(getNewsList.request);
getNewsList.response(NewsActions.updateNewsList);

NewsActions.fetchNewsById.listen(getNewsById.request);
getNewsById.response(NewsActions.updateNewsById);

export default NewsActions;
