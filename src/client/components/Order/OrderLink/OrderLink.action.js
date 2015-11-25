'use strict';

/**
 * @File
 * Actions for the OrderLink component
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const event = SocketClient('getOrderPolicy');

let OrderLinkActions = Reflux.createAction({
  children: ['updated', 'failed']
});

OrderLinkActions.listen(event.request);
event.response(OrderLinkActions.updated);

export default OrderLinkActions;
