'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const event = SocketClient('getOpenSearchWork');

let WorkActions = Reflux.createAction({
  children: ['updated', 'failed']
});

WorkActions.listen((res) => {
  if (res.id.length > 0) {
    event.request({pid: res.id, offset: 1, worksPerPage: 1, allManifestations: true});
  }
  else {
    WorkActions.updated([]);
  }
});

event.response(WorkActions.updated);

export default WorkActions;
