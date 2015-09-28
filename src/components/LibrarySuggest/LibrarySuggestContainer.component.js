'use strict';

import React from 'react';

// Components
import LibrarySearch from './LibrarySuggest.component.js';
import LibrarySearchResults from './LibrarySearchResults.component.js';
import Query from '../query/Query.component.js';

// Stores
import LibrarySearchStore from '../../stores/LibrarySearch.store.js';

class LibrarySuggestContainerComponent extends React.Component {
  static displayName() {
    return 'LibrarySuggestContainer.component';
  }

  static propTypes() {
    return {
      libraryData: React.PropTypes.array,
      query: React.PropTypes.array
    };
  }

  constructor() {
    super();

    this.state = {
      librarysearch: LibrarySearchStore.store
    };

    this.unsubscribe = LibrarySearchStore.listen(
      () => this.setState({
        librarysearch: LibrarySearchStore.store
      })
    );
  }

  componentWillMount() {
    this.state.librarysearch.data = this.props.libraryData ? this.props.libraryData : this.state.librarysearch.data;
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div className='search' >
        <Query queryLocation='/library/suggest'/>
        <LibrarySearch query={this.props.query} />
        <LibrarySearchResults
          data={this.state.librarysearch.data}
          pending={this.state.librarysearch.pending} />
      </div>
    );
  }
}

export default LibrarySuggestContainerComponent;
