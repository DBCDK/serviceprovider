'use strict';

import Reflux from 'reflux';

import UserStatusActions from '../actions/UserStatus.action.js';

import {forEach} from 'lodash';

const UserStatusStore = Reflux.createStore({

  store: {
    status: null,
    uiStatus: {
      loanCollapsed: true,
      ordersCollapsed: true,
      fiscalCollapsed: true
    }
  },

  init() {
    UserStatusActions.fetchUserStatus();
    this.listenToMany(UserStatusActions);
  },

  onUpdateUserStatus(userStatusResponse) { // eslint-disable-line

    this.store.status = {
      orderedItems: userStatusResponse.result.orderedItems,
      loanedItems: userStatusResponse.result.loanedItems,
      fiscalAccount: userStatusResponse.result.fiscalAccount
    };

    this.trigger(this.store);
  },

  onToggleLoanDisplay() { // eslint-disable-line
    this.store.uiStatus.loanCollapsed = !this.store.uiStatus.loanCollapsed;
    this.trigger(this.store);
  },

  onToggleOrderDisplay() { // eslint-disable-line
    this.store.uiStatus.ordersCollapsed = !this.store.uiStatus.ordersCollapsed;
    this.trigger(this.store);
  },

  onMarkOrderForDeletion(orderId, orderType) {
    // modify store.status.orderedItems to mark an order for deletion

    if (this.store.status.orderedItems) {
      forEach(this.store.status.orderedItems.orders, (order) => {
        if (order.orderId === orderId) {
          // mark the specified order
          order.markedForDeletion = true;
          order.isDeleteConfirmed = false;
          order.isDeleteSuccesful = false;
        }
      });
    }

    // make sure re-render is triggered
    this.trigger(this.store.status);

    // send cancel action to complete deletion
    UserStatusActions.cancelOrder({orderId: orderId, orderType: orderType});
  },

  onMarkLoanForRenewal(loanId) {
    // modify store.status.loanedItems to mark a loan for renewal

    if (this.store.status.loanedItems) {
      forEach(this.store.status.loanedItems.loans, (loan) => {
        if (loan.loanId === loanId) {
          // mark the specified loan
          loan.markedForRenewal = true;
          loan.isRenewConfirmed = false;
          loan.isRenewSuccesful = false;
        }
      });
    }

    // make sure re-render is triggered
    this.trigger(this.store);

    // send renew action
    UserStatusActions.renewLoan({loanId: loanId});
  },


  onRenewLoan(loanId) { // eslint-disable-line
  },

  onConfirmRenewLoan(result) {

    if (this.store.status.loanedItems) {
      forEach(this.store.status.loanedItems.loans, (loan) => {
        if (loan.loanId === result.loanId) {
          // mark the specified loan
          loan.markedForRenewal = true;
          loan.isRenewConfirmed = true;
          loan.isRenewSuccesful = result.loanRenewed;
        }
      });
    }

    // make sure re-render is triggered
    this.trigger(this.store);
  },

  onCancelOrder(orderId) { // eslint-disable-line
  },

  onConfirmCancelOrder(result) {

    if (this.store.status.orderedItems) {
      forEach(this.store.status.orderedItems.orders, (order) => {
        if (order.orderId === result.orderId) {
          // mark the specified order
          order.markedForDeletion = true;
          order.isDeleteConfirmed = true;
          order.isDeleteSuccesful = result.orderCancelled;
        }
      });
    }
    // make sure re-render is triggered
    this.trigger(this.store);
  }

});

export default UserStatusStore;
