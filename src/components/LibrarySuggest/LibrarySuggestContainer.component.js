'use strict';

import React from 'react';
import Reflux from 'reflux';

// Components
import LibrarySearch from './LibrarySuggest.component.js';
import LibrarySearchResults from './LibrarySearchResults.component.js';
import Query from '../query/Query.component.js';

// Stores
import LibrarySearchStore from '../../stores/LibrarySearch.store.js';

const LibrarySuggestContainerComponent = React.createClass({
  displayName: 'LibrarySuggestContainer.component',

  mixins: [
    Reflux.connect(LibrarySearchStore, 'librarysearch')
  ],

  render() {
    return (
      <div className='search' >
        <Query queryLocation='/library/suggest'/>
        <LibrarySearch />
        <LibrarySearchResults
          data={this.state.librarysearch.data}
          pending={this.state.librarysearch.pending} />
      </div>
    );
  }
});

export default LibrarySuggestContainerComponent;
