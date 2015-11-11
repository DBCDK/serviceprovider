'use strict';

import Reflux from 'reflux';

import UserStatusActions from '../actions/UserStatus.action.js';

import {forEach} from 'lodash';

const UserStatusStore = Reflux.createStore({

  store: {
    status: null
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

    this.trigger(this.store.status);
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
    this.trigger(this.store.status);

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
    this.trigger(this.store.status);
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
    this.trigger(this.store.status);
  }
});

export default UserStatusStore;
