'use strict';

import React from 'react';
import {isEmpty} from 'lodash';

// Components
import LibrarySearch from './LibrarySuggest.component.js';
import LibrarySearchResults from './LibrarySearchResults.component.js';
import Query from '../query/Query.component.js';

// Stores
import LibrarySearchStore from '../../stores/LibrarySearch.store.js';
import QueryStore from '../../stores/QueryStore.store.js';

class LibrarySuggestContainerComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      librarysearch: LibrarySearchStore.store,
      query: QueryStore.store
    };

    this.unsubscribe = [
      LibrarySearchStore.listen(
        () => this.setState({
          librarysearch: LibrarySearchStore.store
        })
      ),
      QueryStore.listen(
        () => this.setState({
          query: QueryStore.store
        })
      )
    ];
  }

  componentWillMount() {
    this.state.librarysearch.data = this.props.libraryData ? this.props.libraryData : this.state.librarysearch.data;
    this.state.query.query = this.props.query ? this.props.query : this.state.query.query;
  }

  componentDidMount() {
    if (this.state.query.query.length > 0 && isEmpty(this.state.librarysearch.data)) {
      LibrarySearchStore.onQueryUpdated(this.state.query);
    }
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  render() {
    return (
      <div className='search' >
        <Query queryLocation='/library/suggest'/>
        <LibrarySearch query={this.state.query.query} />
        <LibrarySearchResults
          data={this.state.librarysearch.data}
          pending={this.state.librarysearch.pending}
          query={this.state.query.query} />
      </div>
    );
  }
}

LibrarySuggestContainerComponent.displayName = 'LibrarySuggestContainer.component';
LibrarySuggestContainerComponent.propTypes = {
  libraryData: React.PropTypes.array,
  query: React.PropTypes.array
};

export default LibrarySuggestContainerComponent;
