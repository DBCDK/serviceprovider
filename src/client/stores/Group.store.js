'use strict';

import Reflux from 'reflux';

import GroupActions from '../actions/Group.action.js';


const GroupStore = Reflux.createStore({

  store: {
    blabla: []
  },

  init() {
    this.listenToMany(GroupActions);
  },

  onUpdateGroup(stuff) {
    console.log('in store', stuff);
  }
});

export default GroupStore;
