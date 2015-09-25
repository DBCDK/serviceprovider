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

  propTypes: {
    libraryData: React.PropTypes.array,
    query: React.PropTypes.array
  },

  mixins: [
    Reflux.connect(LibrarySearchStore, 'librarysearch')
  ],

  render() {
    return (
      <div className='search' >
        <Query queryLocation='/library/suggest'/>
        <LibrarySearch query={this.props.query} />
        <LibrarySearchResults
          data={this.props.libraryData ? this.props.libraryData : this.state.librarysearch.data}
          pending={this.state.librarysearch.pending} />
      </div>
    );
  }
});

export default LibrarySuggestContainerComponent;
