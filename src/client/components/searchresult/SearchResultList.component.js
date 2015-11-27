'use strict';

/**
 * @file
 * Container for the ResultDisplay Component
 */

import React from 'react';

// Components
import ResultDisplay from '../ResultListView/ResultDisplay/ResultDisplay.component';


export default class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ResultDisplay
        hasMore={this.props.data.results.info.more === 'true'}
        layout={this.props.layout}
        loadMore={this.props.loadMore}
        noResultsText=''
        pending={this.props.data.results.pending}
        result={this.props.data.results.result}
      />
    );
  }
}

SearchResultList.displayName = 'SearchResultList';
SearchResultList.propTypes = {
  data: React.PropTypes.object.isRequired,
  layout: React.PropTypes.func,
  loadMore: React.PropTypes.func
};
