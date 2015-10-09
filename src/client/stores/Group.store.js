'use strict';

import Reflux from 'reflux';

import GroupActions from '../actions/Group.action.js';

import ProfileStore from './Profile.store.js';


const GroupStore = Reflux.createStore({

  store: {
    group: {},
    loggedIn: false
  },

  init() {
    this.listenToMany(GroupActions);
    this.listenTo(ProfileStore, this.profileStoreUpdate);
  },

  profileStoreUpdate(profile) {
    this.store.loggedIn = profile.userIsLoggedIn;
  },

  onUpdateGroup(newGroup) {

    this.store.group = {
      name: newGroup.name,
      description: newGroup.description,
      members: newGroup.members,
      posts: newGroup.posts,
      groupId: newGroup.id,
      loggedIn: this.store.loggedIn
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
