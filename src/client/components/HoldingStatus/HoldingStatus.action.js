'use strict';

import Reflux from 'reflux';

import SocketClient from 'dbc-node-serviceprovider-socketclient';

const getHoldingStatus = SocketClient('holdingStatus');

const HoldingStatusActions = Reflux.createActions([
  'getHoldingStatusRequest',
  'getHoldingStatusResponse'
]);

HoldingStatusActions.getHoldingStatusRequest.listen(getHoldingStatus.request);
getHoldingStatus.response(HoldingStatusActions.getHoldingStatusResponse);

export default HoldingStatusActions;
