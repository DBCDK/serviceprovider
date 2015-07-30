'use strict';
/**
 * @file
 * Container for showing default recommendations
 */

import React from 'react';

// Components
import SearchResultList from '../searchresult/SearchResultList.component.js';
import RecommendationActions from '../../actions/Recommendations.action.js';

export default React.createClass({
  componentDidMount() {
    RecommendationActions.default();
  },
  render() {
    return (
      <SearchResultList data={{results: this.props.data.recommendations, covers: this.props.data.covers}} config={this.props.config} actions={this.props.actions} />
    );
  }
});
