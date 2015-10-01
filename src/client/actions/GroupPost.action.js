'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
let fetchGroupPostSocket = SocketClient('getGroupPost');
let commentSocket = SocketClient('commentOnGroupPost');

const GroupPostActions = Reflux.createActions({
  fetchGroupPost: {children: ['response']},
  commentsUpdated: {children: ['response']},
  clear: {}
});

GroupPostActions.fetchGroupPost.listen((val) => {
  fetchGroupPostSocket.request(val);
});

fetchGroupPostSocket.response(GroupPostActions.fetchGroupPost.response);

GroupPostActions.commentsUpdated.listen((val) => {
  commentSocket.request(val);
});

commentSocket.response(GroupPostActions.commentsUpdated.response);

export default GroupPostActions;
