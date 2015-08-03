'use strict';

/**
 * @file
 * Profile Store
 */


import Reflux from 'reflux';
import ProfileActions from '../actions/Profile.action.js';

let _profile = {
  name: 'I-Love-Ponys',
  imageUrl: '/dummy.jpg',
  followingCount: 16,
  groupsCount: 7,
  followersCount: 35,
  editEnabled: false
};

let profileStore = Reflux.createStore({
  listenables: [ProfileActions],

  init: function () {
  },

  onToggleEdit: function () {
    _profile.editEnabled = !_profile.editEnabled;
    this.trigger(_profile);
  },

  onUpdateAttribute: function (str) {
    _profile.name = str;
    this.trigger(_profile);
  },

  onUpdateImageUrl: function (str) {
    _profile.imageUrl = str;
    this.trigger(_profile);
  },

  getProfile: function () {
    return _profile;
  }

});

export default profileStore;
