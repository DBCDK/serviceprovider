'use strict';
/**
 * @file
 * Container for the Autocomplete Component
 */

import React from 'react';
import {isEmpty} from 'lodash';
import AutoComplete from './AutoComplete.component';

const AutoCompleteContainer = React.createClass({
  displayName: 'AutoCompleteContainer',

  propTypes: {
    actions: React.PropTypes.object.isRequired,
    input: React.PropTypes.object.isRequired,
    store: React.PropTypes.object
  },

  getInitialState() {
    return {
      focus: false,
      hasSearched: false
    };
  },

  shouldComponentUpdate() {
    if (this.state.focus !== this.props.input.focus) {
      // This is a small hack. The inputfield looses focus, when a link on the autocomplete is pressed
      // which makes the autocomplete hide, before link is pressed. Wrapping this in a sends the event to the back of the eventqueue
      setTimeout(() => this.setState({focus: this.props.input.focus}), 50);
      return false;
    }

    return true;
  },

  timer: null,

  onInputValueChange(inputValue) {
    if (isEmpty(inputValue)) {
      return;
    }
    if (this.lastInputValue !== inputValue) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        // request suggestions only when more than 3 characters have been entered
        if (inputValue.length >= 3) {
          this.props.actions.textfieldUpdated(inputValue);
        }
      }, 500);
    }
    this.lastInputValue = inputValue;
    this.state.hasSearched = true;
  },

  shouldAutoCompleteBeVisible() {
    return !this.props.store.pending && !isEmpty(this.props.input.value) && this.props.input.focus && this.state.focus && this.state.hasSearched;
  },

  render() {
    if (this.props.input.focus) {
      this.onInputValueChange(this.props.input.value);
    }
    const visible = this.shouldAutoCompleteBeVisible();
    return <AutoComplete data={this.props.store.data[this.props.input.value]} errormessage="Ingen resultater fundet" visible={visible} />;
  }
});

export default AutoCompleteContainer;
