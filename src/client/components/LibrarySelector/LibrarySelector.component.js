'use strict';

import React from 'react';

export default class LibrarySelector extends React.Component {
  render() {
    return (
      <select defaultValue="775100" name="agencyid" >
        <option value="737600" >Guldborgsund</option>
        <option disabled="true" value="743001" >Ringe</option>
        <option value="100451" >Q2fjern</option>
        <option value="775100" >Aarhus</option>
      </select>
    );
  }
}

LibrarySelector.displayName = 'LibrarySelector';
LibrarySelector.propTypes = {};
