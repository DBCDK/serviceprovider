'use strict';

import Reflux from 'reflux';
import SocketClient from '../utils/ServiceProviderSocketClient.js';

const event = SocketClient('getOpenSearchWork');

let WorkActions = Reflux.createAction({
  children: ['updated', 'failed']
});

WorkActions.listen((res) => {
  if (res.pid.length > 0) {
    event.request({pid: res.pid, offset: 1, worksPerPage: 1, allManifestations: true});
  }
  else {
    WorkActions.updated([]);
  }
});

event.response(WorkActions.updated);

export default WorkActions;
