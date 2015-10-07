'use strict';

import Reflux from 'reflux';

import GroupActions from '../actions/Group.action.js';


const GroupStore = Reflux.createStore({

  store: {
    group: {}
  },

  init() {
    this.listenToMany(GroupActions);
  },

  onUpdateGroup(newGroup) {
    console.log('in store', newGroup);

    this.store.group = {
      name: newGroup.name,
      description: newGroup.description,
      members: newGroup.members,
      posts: newGroup.posts
    }

    this.trigger(this.store.group);
  },

  onConfirmCreateGroup(isSuccesful) {
    console.log('group created', isSuccesful);
  }

});

export default GroupStore;
