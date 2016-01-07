'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';


const briefDisplay = SocketClient('getOpenSearchBriefDisplayList');

const WorkListActions = Reflux.createActions(
  ['getList', 'listLoaded']
);

WorkListActions.getList.listen((res) => {
  if (res.length > 0) {
    briefDisplay.request({pid: res});
  }
  else {
    WorkListActions.listLoaded([]);
  }
});

briefDisplay.response(WorkListActions.listLoaded);

export default WorkListActions;
