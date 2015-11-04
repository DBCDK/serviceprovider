'use strict';

import Reflux from 'reflux';

import UserStatusActions from '../actions/UserStatus.action.js';

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
  }
});

export default UserStatusStore;
