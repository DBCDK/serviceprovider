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
    data: React.PropTypes.object,
    input: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      focus: false // @todo mmj focus could probably be ignored as it is handed over through the props.input
    };
  },
  shouldAutoCompleteBeVisible() {
    return this.state.focus && !isEmpty(this.props.data[this.props.input.value]) && this.props.input.focus;
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
      // which makes the autocomplete hide, before link is pressed. Wrapping this in a sends the event to the back of the eventqueue
      setTimeout(() => this.setState({focus: this.props.input.focus}), 1);
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

export default AutoCompleteContainer;
