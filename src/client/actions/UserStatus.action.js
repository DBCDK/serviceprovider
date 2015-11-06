'use strict';

/**
 * @file UserStatus actions
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const fetchUserStatusEvent = SocketClient('getUserStatus');
const cancelOrderEvent = SocketClient('cancelOrder');

const UserStatusActions = Reflux.createActions([
  'fetchUserStatus',
  'updateUserStatus',
  'cancelOrder',
  'confirmCancelOrder',
  'markOrderForDeletion'
]);

UserStatusActions.fetchUserStatus.listen(fetchUserStatusEvent.request);
fetchUserStatusEvent.response(UserStatusActions.updateUserStatus);

UserStatusActions.cancelOrder.listen(cancelOrderEvent.request);
cancelOrderEvent.response(UserStatusActions.confirmCancelOrder);

export default UserStatusActions;
