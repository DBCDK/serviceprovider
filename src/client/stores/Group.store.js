'use strict';

import Reflux from 'reflux';

import GroupActions from '../actions/Group.action.js';

import ProfileStore from './Profile.store.js';


const GroupStore = Reflux.createStore({

  store: {
    group: {
      name: '',
      description: '',
      posts: [],
      members: [],
      id: null,
      loggedIn: false,
      createPostMode: false
    },
    loggedIn: false,
    createPostMode: false
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
      id: newGroup.id,
      loggedIn: this.store.loggedIn,
      createPostMode: this.store.createPostMode
    };

    this.trigger(this.store);
  },

  onConfirmCreateGroup() {
  },

  onConfirmCreatePost() {
    GroupActions.fetchGroup({id: this.store.group.id});
  },

  onCreateComment() {
  },

  onToggleCreatePostMode() {
    this.store.createPostMode = !this.store.createPostMode;
    GroupActions.updateGroup(this.store.group);
  },

  onConfirmCreateComment() {
    GroupActions.fetchGroup({id: this.store.group.id});
  }

});

export default GroupStore;
