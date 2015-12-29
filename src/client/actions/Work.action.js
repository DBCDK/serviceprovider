'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const event = SocketClient('getOpenSearchWork');
const briefDisplay = SocketClient('getOpenSearchWorkBriefDisplay');

let WorkActions = Reflux.createAction({
  children: ['partial', 'updated', 'failed']
});

WorkActions.listen((res) => {
  if (res.id.length > 0) {
    briefDisplay.request({pid: res.id});
    setTimeout(() => event.request({pid: res.id, offset: 1, worksPerPage: 1, allManifestations: true}), 1); // vent til næste event cycle
  }
  else {
    WorkActions.updated([]);
  }
});

event.response(WorkActions.updated);
briefDisplay.response(WorkActions.partial);

export default WorkActions;
