'use strict';

/**
 * @file
 * Container for the Search Result
 */

import React from 'react';
import Reflux from 'reflux';

// Components
import SearchResultList from './SearchResultList.component.js';
import RecommendationContainer from '../Recommend/RecommendationContainer.component';
import Tabs from '../tabs/Tabs.component.js';

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
    const tabs = [];
    tabs.push({
      label: 'Søgeresultat',
      component:
        <SearchResultList data={{results: this.state.results}} loadMore={QueryActions.loadMore} />,
      active: true
    });
    tabs.push({
      label: 'Anbefalinger',
      component:
        <SearchResultList data={{results: this.state.recommendations}} loadMore={QueryActions.loadMore} />,
      active: false
    });

    return (
      <Tabs defaultSelected={0} tabs={tabs} />
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
      <div className='search-result' >
        {result}
      </div>
    );
  }
});
