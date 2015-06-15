'use strict';
// libs
import React from 'react';

import AutoCompleteComp from 'dbc-react-autocomplete';

// components
import Logo from '../logo/logo.react.js';
import SearchField from './SearchField.component.js'; // dummy search field

let AutoComplete = React.createClass({
  render() {
    return (
      <div>
        <Logo />
        <SearchField autocomplete={AutoCompleteComp}/>
      </div>
    );
  }
});

export default AutoComplete;
