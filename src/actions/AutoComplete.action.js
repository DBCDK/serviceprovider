'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
let socket = SocketClient('getPopSuggestions');

const AutoCompleteActions = Reflux.createActions({
  textfieldUpdated: {children: ['response']},
  clear: {}
});

AutoCompleteActions.textfieldUpdated.listen((val) => {
  socket.request(val);
});

socket.response(AutoCompleteActions.textfieldUpdated.response);

export default AutoCompleteActions;
