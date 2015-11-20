'use strict';

/**
 * @file UserStatus actions
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const fetchUserStatusEvent = SocketClient('getUserStatus');
const cancelOrderEvent = SocketClient('cancelOrder');
const renewLoanEvent = SocketClient('renewLoan');
const changePickupEvent = SocketClient('updateOrder');

const UserStatusActions = Reflux.createActions([
  'fetchUserStatus',
  'updateUserStatus',
  'markForChangePickupAgency',
  'changePickupAgency',
  'confirmChangePickupAgency',
  'cancelOrder',
  'confirmCancelOrder',
  'renewLoan',
  'confirmRenewLoan',
  'markOrderForDeletion',
  'markLoanForRenewal',
  'toggleFiscalDisplay',
  'toggleLoanDisplay',
  'toggleOrderDisplay'
]);

UserStatusActions.fetchUserStatus.listen(fetchUserStatusEvent.request);
fetchUserStatusEvent.response(UserStatusActions.updateUserStatus);

UserStatusActions.cancelOrder.listen(cancelOrderEvent.request);
cancelOrderEvent.response(UserStatusActions.confirmCancelOrder);

UserStatusActions.renewLoan.listen(renewLoanEvent.request);
renewLoanEvent.response(UserStatusActions.confirmRenewLoan);

UserStatusActions.changePickupAgency.listen(changePickupEvent.request);
changePickupEvent.response(UserStatusActions.confirmChangePickupAgency);

export default UserStatusActions;
