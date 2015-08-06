'use strict';

/**
 * @file
 * Container for the Search Result
 */

import React from 'react';
import Reflux from 'reflux';

// Components
import SearchResultList from './SearchResultList.component.js';
import DefaultRecommendations from '../recommendations/DefaultRecommendationsContainer.component.js';
import Tabs from '../tabs/Tabs.component.js';
// Actions
import RecommendationActions from '../../actions/Recommendations.action.js';
import QueryActions from '../../actions/QueryUpdate.action.js';

// Stores
import ResultListStore from '../../stores/ResultList.store.js';
import RecommendationStore from '../../stores/Recommendations.store.js';
import CoverStore from '../../stores/CoverImage.store.js';
import QueryStore from '../../stores/QueryStore.store.js';


export default React.createClass({
  mixins: [
    Reflux.listenTo(ResultListStore, 'updateRecommendations'),
    Reflux.connect(ResultListStore, 'results'),
    Reflux.connect(CoverStore, 'covers'),
    Reflux.connect(RecommendationStore, 'recommendations'),
    Reflux.connect(QueryStore, 'query')
  ],

  updateRecommendations(data) {
    RecommendationActions.request(data.result.map(element => element.identifiers[0]));
  },
  renderSearchResult() {
    const tabs = [];
    tabs.push({
      label: 'Søgeresultat',
      component: <SearchResultList data={{results: this.state.results, covers: this.state.covers}} config={this.props.config} actions={QueryActions} />,
      active: true
    });
    tabs.push({
      label: 'Anbefalinger',
      component: <SearchResultList data={{results: this.state.recommendations, covers: this.state.covers}} config={this.props.config} actions={QueryActions} />,
      active: false
    });

    return (
        <Tabs tabs={tabs} defaultSelected={0} />
    );
  },

  renderDefaultRecommendations() {
    return (
      <DefaultRecommendations data={{recommendations: this.state.recommendations, covers: this.state.covers}} config={this.props.config} actions={QueryActions} />
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
