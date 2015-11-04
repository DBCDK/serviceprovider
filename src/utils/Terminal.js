'use strict';

import SocketClient from 'dbc-node-serviceprovider-socketclient';

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('sendevent').addEventListener('click', function() {
    let socket = SocketClient(document.getElementById('eventname').value);
    socket.request(JSON.parse(document.getElementById('eventval').value));
  });
});
