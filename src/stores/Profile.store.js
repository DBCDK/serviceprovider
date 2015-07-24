/**
 * Created by matias on 23-07-15.
 */

"use strict";

import Reflux from 'reflux';
import ProfileActions from '../actions/Profile.action.js';

let _profile = {
  name: 'I-Love-Ponys',
  imageUrl: 'http://www.saintsfc.co.uk/images/common/bg_player_profile_default_big.png',
  followingCount: 16,
  groupsCount: 7,
  followersCount: 35,
  editEnabled:true
};

let profileStore = Reflux.createStore({
  listenables: [ProfileActions],

  init: function(){
  },

  onToggleEdit: function(){
    _profile.editEnabled = !_profile.editEnabled;
    this.trigger(_profile);
  },

  onUpdateAttribute: function(str){
    console.log('store got attrChange action');
    _profile.name = str;
    this.trigger(_profile);
  },

  getProfile: function(){
    return _profile;
  }

});

export default profileStore;
