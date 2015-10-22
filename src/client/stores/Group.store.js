'use strict';

import Reflux from 'reflux';

import GroupActions from '../actions/Group.action.js';

import ProfileStore from './Profile.store.js';

import {any} from 'lodash';

const GroupStore = Reflux.createStore({

  store: {
    group: {
      name: '',
      description: '',
      posts: [],
      members: [],
      id: null,
      groupownerid: null,
      isMember: false,
      loggedIn: false
    },
    loggedIn: false,
    createPostMode: false,
    editGroupMode: false,
    uid: null
  },

  init() {
    this.listenToMany(GroupActions);
    this.listenTo(ProfileStore, this.profileStoreUpdate);
  },

  profileStoreUpdate(profile) {
    this.store.loggedIn = profile.userIsLoggedIn;
    this.store.uid = profile.id;
  },

  onUpdateGroup(newGroup) {

    this.store.group = {
      name: newGroup.name,
      description: newGroup.description,
      members: newGroup.members,
      posts: newGroup.posts,
      id: newGroup.id,
      groupownerid: newGroup.groupownerid,
      isOwner: this.store.uid === newGroup.groupownerid,
      loggedIn: this.store.loggedIn,
      createPostMode: this.store.createPostMode,
      editGroupMode: this.store.editGroupMode,
      isMember: any(newGroup.members, (member)=>(member.id === this.store.uid))
    };

    this.trigger(this.store);
  },

  onConfirmCreateGroup(response) {
    if (response.succes && response.groupId) {
      window.location = '/groups/' + response.groupId;
    }
  },

  onConfirmSaveGroup() {
    GroupActions.fetchGroup({id: this.store.group.id});
  },

  onConfirmCreatePost() {
    GroupActions.fetchGroup({id: this.store.group.id});
  },

  onConfirmJoinGroup() {
    this.store.group.isMember = true;
    GroupActions.fetchGroup({id: this.store.group.id});
  },

  onConfirmLeaveGroup() {
    this.store.group.isMember = false;
    GroupActions.fetchGroup({id: this.store.group.id});
  },

  onCreateComment() {
  },

  onToggleCreatePostMode() {
    this.store.createPostMode = !this.store.createPostMode;
    GroupActions.updateGroup(this.store.group);
  },

  onToggleEditGroupMode() {
    this.store.editGroupMode = !this.store.editGroupMode;
    GroupActions.updateGroup(this.store.group);
  },

  onToggleGroupMembership() {
    if (this.store.group.isMember) {
      GroupActions.leaveGroup({groupId: this.store.group.id});
    }
    else {
      GroupActions.joinGroup({groupId: this.store.group.id});
    }
  },

  onConfirmCreateComment() {
    GroupActions.fetchGroup({id: this.store.group.id});
  }

});

export default GroupStore;
