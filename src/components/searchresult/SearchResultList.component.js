'use strict';

/**
 * @file
 * Container for the ResultDisplay Component
 */

import React from 'react';

// Components
import {ResultDisplay} from 'dbc-react-resultlistview';
import Loader from '../Loader.component.js';

export default React.createClass({
  render() {
    return (
      <ResultDisplay
        coverImages={this.props.data.covers.images}
        hasMore={this.props.data.results.info.more === 'true'}
        loadMore={this.props.actions.nextPage}
        loader={<Loader pending={this.props.data.results.pending} />}
        noOfWorks={this.props.config.noOfWorks || 2}
        noResultsText=''
        pending={this.props.data.results.pending}
        result={this.props.data.results.result}
        />
    );
  }
});
