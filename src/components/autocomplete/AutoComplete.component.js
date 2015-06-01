'use strict';
// libs
import React from 'react';

// components
import Logo from '../logo/logo.react.js';
import SearchField from './SearchField.component.js';

var AutoComplete = React.createClass({
  render() {
    return (
      <div>
        <Logo />
        <SearchField />
      </div>
    );
  }
});

export default AutoComplete;
