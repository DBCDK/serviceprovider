'use strict';

import Reflux from 'reflux';
import InputActions from '../actions/InputField.actions.js';

/**
 * Store containing the current query of the page
 */
let InputFieldStore = Reflux.createStore({
  listenables: InputActions,

  store: {
    value: '',
    focus: false
  },

  getInitialState() {
    return this.store;
  },

  onChange(inputValue) {
    this.store.value = inputValue;
    this.trigger(this.store);
  },

  onFocus(state) {
    this.store.focus = state;
    this.trigger(this.store);
  }
});

export default InputFieldStore;
