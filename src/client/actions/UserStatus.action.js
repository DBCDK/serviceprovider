'use strict';

/**
 * @file UserStatus actions
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const fetchUserStatusEvent = SocketClient('getUserStatus');

const UserStatusActions = Reflux.createActions([
  'fetchUserStatus',
  'updateUserStatus'
]);

UserStatusActions.fetchUserStatus.listen(fetchUserStatusEvent.request);
fetchUserStatusEvent.response(UserStatusActions.updateUserStatus);

export default UserStatusActions;
