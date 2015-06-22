'use strict';

import Reflux from 'reflux';
import SocketClient from '../utils/ServiceProviderSocketClient.js';
let socket = SocketClient('getPopSuggestions');

const AutoCompleteActions = Reflux.createActions({
  textfieldUpdated: {children: ['response']}
});

AutoCompleteActions.textfieldUpdated.listen((val) => {
  socket.request(val);
});

socket.response(AutoCompleteActions.textfieldUpdated.response);

export default AutoCompleteActions;
