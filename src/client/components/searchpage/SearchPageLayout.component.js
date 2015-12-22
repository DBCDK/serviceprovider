'use strict';

/**
 * @file
 * Layout component for the searchpage
 */

import React from 'react';

import SearchFieldContainer from '../searchfield/SearchFieldContainer.component.js';
import FacetsContainer from '../Facets/FacetsContainer.component.js';
import SearchResultContainer from '../searchresult/SearchResultContainer.component.js';
import FilterGuideContainer from '../filter/FilterlistContainer.component.js';
import SearchSort from './SearchSort/SearchSort.component';
import Query from '../query/Query.component.js';

export default React.createClass({
  displayName: 'SearchPageLayout',
  propTypes: {
    query: React.PropTypes.array,
    recommendations: React.PropTypes.object
  },

  render() {
    return (
      <div className='search'>
        <Query queryLocation='/search' />
        <SearchFieldContainer query={this.props.query} />
        <FilterGuideContainer />
        <FacetsContainer />
        <SearchSort />
        <SearchResultContainer recommendations={this.props.recommendations} />
      </div>
    );
  }
});
