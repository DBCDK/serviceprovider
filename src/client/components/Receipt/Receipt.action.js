'use strict';

/**
 * @File
 * Actions for the Receipt component
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const event = SocketClient('placeOrder');

let ReceiptActions = Reflux.createAction({
  children: ['updated', 'failed']
});

ReceiptActions.listen(event.request);
event.response(ReceiptActions.updated);

export default ReceiptActions;
