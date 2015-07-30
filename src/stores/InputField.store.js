'use strict';

import Reflux from 'reflux';
import InputActions from '../actions/InputField.actions.js';

const store = {
  value: '',
  focus: false
};

/**
 * Store containing the current query of the page
 */
let InputFieldStore = Reflux.createStore({
  listenables: InputActions,

  getInitialState() {
    return store;
  },

  onChange(inputValue) {
    store.value = inputValue;
    this.trigger(store);
  },

  onFocus(state) {
    store.focus = state;
    this.trigger(store);
  }

});

export default InputFieldStore;
