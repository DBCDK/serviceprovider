'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
let socket = SocketClient('searchOpenAgency');

const LibrarySearchActions = Reflux.createActions({
  libraryQueryUpdated: {children: ['response']},
  clear: {}
});

LibrarySearchActions.libraryQueryUpdated.listen((val) => {
  socket.request(val);
});

socket.response(LibrarySearchActions.libraryQueryUpdated.response);

export default LibrarySearchActions;
