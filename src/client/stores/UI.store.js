'use strict';

/**
 * @file
 * TODO create description
 */

import Reflux from 'reflux';

// Actions
import UIActions from '../actions/UI.actions.js';

const ProfileStore = Reflux.createStore({
  store: {
    isTopBarMenuOpen: false
  },

  init() {
    this.listenToMany(UIActions);
  },

  onToggleTopBarMenu() {
    this.store.isTopBarMenuOpen = !this.store.isTopBarMenuOpen;
    this.trigger(this.store);
  }

});

export default ProfileStore;
