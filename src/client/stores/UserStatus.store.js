'use strict';

import Reflux from 'reflux';

import UserStatusActions from '../actions/UserStatus.action.js';

import {forEach} from 'lodash';

const UserStatusStore = Reflux.createStore({

    store: {
        status: null
    },

    init() {
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

    onMarkOrderForDeletion(orderId) {
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

        // TODO: send cancel action to complete deletion (REMOVE CRAP FROM orderId)
        UserStatusActions.cancelOrder({orderId: orderId});
    },

    onCancelOrder(orderId) {
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
