'use strict';

/**
 * @file
 * Layout component for the searchpage
 */

import React from 'react';

import SearchFieldContainer from '../searchfield/SearchFieldContainer.component.js';
import SearchResultContainer from '../searchresult/SearchResultContainer.component.js';
import FilterGuideContainer from '../filter/FilterlistContainer.component.js';
import Query from '../query/Query.component.js';

export default React.createClass({
  displayName: 'SearchPageLayput',
  propTypes: {
    config: React.PropTypes.object
  },

  render() {
    return (
      <div className='search'>
        <Query />
        <SearchFieldContainer />
        <FilterGuideContainer />
        <SearchResultContainer config={this.props.config} />
      </div>
    );
  }
});
