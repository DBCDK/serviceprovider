'use strict';
/**
 * @file
 * Container for the Autocomplete Component
 */

import React from 'react';
import {isEmpty, debounce} from 'lodash';
import AutoComplete from 'dbc-react-autocomplete';

export default React.createClass({

  getInitialState() {
    return {
      focus: false
    };
  },
  shouldAutoCompleteBeVisible() {
    return this.state.focus && !isEmpty(this.props.data[this.props.input.value]);
  },

  onInputValueChange(inputValue) {

    if (this.lastInputValue !== inputValue) {
      this.debouncedTextfieldUpdated(inputValue);
    }
    else if (this.debouncedTextfieldUpdated) {
      this.debouncedTextfieldUpdated.cancel();
    }
    this.lastInputValue = inputValue;
  },

  componentDidMount() {
    // the debounce function ensures the function is max called once every 100 milliseconds
    // @todo cancel calls to debounce on query update
    this.debouncedTextfieldUpdated = debounce(this.props.actions.textfieldUpdated, 100);
  },
  shouldComponentUpdate() {
    if (this.state.focus !== this.props.input.focus) {
      // This is a small hack. The inputfield looses focus, when a link on the autocomplete is pressed
      // which makes the autocomplete hide, before link is pressed. This timeout, delays the hiding process
      setTimeout(() => this.setState({focus: this.props.input.focus}), 100);
      return false;
    }
    return true;
  },

  render() {
    if (this.props.input.focus) {
      this.onInputValueChange(this.props.input.value);
    }
    const visible = this.shouldAutoCompleteBeVisible();
    return <AutoComplete data={this.props.data[this.props.input.value]} visible={visible} />;
  }
});
