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
    isTopBarMenuOpen: false,
    animateTopBarMenu: false
  },

  init() {
    this.listenToMany(UIActions);
  },

  onToggleTopBarMenu() {
    this.store.isTopBarMenuOpen = !this.store.isTopBarMenuOpen;
    this.store.animateTopBarMenu = true;
    this.trigger(this.store);
  }

});

export default ProfileStore;
