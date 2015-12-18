'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const fetchAllAffiliates = SocketClient('getAllAffiliates');

const LibrariesActions = Reflux.createActions([
  'fetchAllAffiliates',
  'fetchAllAffiliatesResponse'
]);

LibrariesActions.fetchAllAffiliates.listen(fetchAllAffiliates.request);
fetchAllAffiliates.response(LibrariesActions.fetchAllAffiliatesResponse);

export default LibrariesActions;
