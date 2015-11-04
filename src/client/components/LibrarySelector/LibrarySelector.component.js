'use strict';

import React from 'react';

export default class LibrarySelector extends React.Component {
  render() {
    return (
      <select defaultValue="775100" name="library" >
        <option disabled="true" value="715100" >Ballerup</option>
        <option value="775100" >Aarhus</option>
        <option disabled="true" value="743001" >Ringe</option>
      </select>
    );
  }
}

LibrarySelector.displayName = 'LibrarySelector';
LibrarySelector.propTypes = {};
