'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const getOrderPolicy = SocketClient('getOrderPolicy');

let OrderPolicyActions = Reflux.createActions(['fetchOrderPolicy', 'fetchOrderPolicyResponse']);

OrderPolicyActions.fetchOrderPolicy.listen(getOrderPolicy.request);
getOrderPolicy.response(OrderPolicyActions.fetchOrderPolicyResponse);

export default OrderPolicyActions;
