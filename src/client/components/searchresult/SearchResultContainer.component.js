'use strict';

/**
 * @file
 * Container for the Search Result
 */

import React from 'react';
import Reflux from 'reflux';

// Components
import SearchResultList from './SearchResultList.component.js';
import RecommendationContainer from '../Recommend/RecommendationContainer.mobilsoeg.component';

// Actions
import RecommendationActions from '../Recommend/Recommendations.action';
import QueryActions from '../../actions/QueryUpdate.action.js';

// Stores
import ResultListStore from '../../stores/ResultList.store.js';
import RecommendationsStore from '../Recommend/Recommendations.store';
import QueryStore from '../../stores/QueryStore.store.js';

export default React.createClass({
  displayName: 'SearchResultContainer.component',

  propTypes: {
    recommendations: React.PropTypes.object
  },

  mixins: [
    Reflux.listenTo(ResultListStore, 'updateRecommendations'),
    Reflux.connect(ResultListStore, 'results'),
    Reflux.connect(RecommendationsStore, 'recommendations'),
    Reflux.connect(QueryStore, 'query')
  ],

  getInitialState() {
    let _recommendationsStore = RecommendationsStore.store;

    if (this.props.recommendations) {
      _recommendationsStore.recommendations = this.props.recommendations;
    }

    return _recommendationsStore;
  },

  updateRecommendations(data) {
    RecommendationActions.request(data.result.map(element => element.identifiers[0]));
  },

  renderSearchResult() {
    return (
      <div>
        <h2>Søgeresultat</h2>
        <SearchResultList data={{results: this.state.results}} loadMore={QueryActions.loadMore} />
      </div>
    );
  },

  renderDefaultRecommendations() {
    return (
      <RecommendationContainer />
    );
  },

  render() {
    const result = this.state.query.query.length && this.renderSearchResult() || this.renderDefaultRecommendations();

    return (
      <div className={'search-result columns'} >
        {result}
      </div>
    );
  }
});
