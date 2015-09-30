'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
let socket = SocketClient('queryGroups');

const GroupSearchActions = Reflux.createActions({
  groupQueryUpdated: {children: ['response']},
  clear: {}
});

GroupSearchActions.groupQueryUpdated.listen((val) => {
  socket.request(val);
});

socket.response(GroupSearchActions.groupQueryUpdated.response);

export default GroupSearchActions;
