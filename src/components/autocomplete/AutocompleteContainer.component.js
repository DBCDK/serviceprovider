'use strict';
/**
 * @file
 * Container for the Autocomplete Component
 */

import React from 'react';
import {isEmpty, debounce} from 'lodash';
import {AutoComplete} from 'dbc-react-components';

const AutoCompleteContainer = React.createClass({
  displayName: 'AutoCompleteContainer',
  propTypes: {
    actions: React.PropTypes.object.isRequired,
    input: React.PropTypes.object.isRequired,
    store: React.PropTypes.object
  },

  getInitialState() {
    return {
      focus: false
    };
  },

  componentDidMount() {
    // the debounce function ensures the function is max called once every 10 milliseconds
    this.debouncedTextfieldUpdated = debounce(this.props.actions.textfieldUpdated, 10);
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

  onInputValueChange(inputValue) {

    if (isEmpty(inputValue)) {
      return;
    }

    if (this.lastInputValue !== inputValue) {
      this.debouncedTextfieldUpdated(inputValue);
    }
    else if (this.debouncedTextfieldUpdated) {
      this.debouncedTextfieldUpdated.cancel();
    }
    this.lastInputValue = inputValue;
  },

  shouldAutoCompleteBeVisible() {
    return this.state.focus && !isEmpty(this.props.store.data[this.props.input.value]) && this.props.input.focus;
  },

  render() {
    if (this.props.input.focus) {
      this.onInputValueChange(this.props.input.value);
    }
    const visible = this.shouldAutoCompleteBeVisible();
    return <AutoComplete data={this.props.store.data[this.props.input.value]} visible={visible} />;
  }
});

export default AutoCompleteContainer;
