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
    
    this.store.group = {
      name: newGroup.name,
      description: newGroup.description,
      members: newGroup.members,
      posts: newGroup.posts,
      groupId: newGroup.id
    };

    this.trigger(this.store);
  },

  onConfirmCreateGroup() {
  },

  onCreateComment() {
  },

  onConfirmCreateComment() {
    GroupActions.fetchGroup({id: this.store.group.groupId});
  }

});

export default GroupStore;
