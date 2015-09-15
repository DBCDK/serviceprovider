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
  displayName: 'DefaultRecommendationsContainer.component',

  propTypes: {
    actions: React.PropTypes.object,
    config: React.PropTypes.object,
    data: React.PropTypes.object
  },

  componentDidMount() {
    RecommendationActions.default();
  },
  render() {
    return (
      <SearchResultList actions={this.props.actions} config={this.props.config} data={{results: this.props.data.recommendations}} />
    );
  }
});
