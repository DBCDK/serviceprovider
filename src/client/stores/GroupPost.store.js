'use strict';

import Reflux from 'reflux';
import GroupPostActions from '../actions/GroupPost.action.js';

const GroupPostStore = Reflux.createStore({
  listenables: GroupPostActions,

  store: {
    data: {},
    pending: false
  },

  getInitialState() {
    return this.store;
  },

  fetchGroupPostResponse(response) {
    this.store.data = response;
    this.trigger(this.store);
  },

  commentsUpdatedResponse() {
    GroupPostActions.fetchGroupPost(this.store.data.id);
  }
});

export default GroupPostStore;
