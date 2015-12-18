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

const getEventList = SocketClient('getEventList');
const getEventById = SocketClient('getEventById');

const EventActions = Reflux.createActions([
  'fetchEventList',
  'updateEventList',
  'fetchEventById',
  'updateEventById'
]);

EventActions.fetchEventList.listen(getEventList.request);
getEventList.response(EventActions.updateEventList);

EventActions.fetchEventById.listen(getEventById.request);
getEventById.response(EventActions.updateEventById);

export default EventActions;
