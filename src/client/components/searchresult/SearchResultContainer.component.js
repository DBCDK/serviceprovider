'use strict';

/**
 * @file
 * Container for the Search Result
 */

import React from 'react';

// Components
import SearchResultList from './SearchResultList.component.js';
import RecommendationContainer from '../Recommend/RecommendationContainer.component.js';

// Actions
import RecommendationActions from '../Recommend/Recommendations.action';
import QueryActions from '../../actions/QueryUpdate.action.js';

// Stores
import ResultListStore from '../../stores/ResultList.store.js';
import RecommendationsStore from '../Recommend/Recommendations.store';
import QueryStore from '../../stores/QueryStore.store.js';

export default class SearchResultContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recommendations: this.props.recommendations ? this.props.recommendations : RecommendationsStore.store,
      results: ResultListStore.store,
      query: QueryStore.store
    };

    this.unsubscribe = [
      RecommendationsStore.listen(this.recommendationsStoreWasUpdated.bind(this)),
      ResultListStore.listen(this.resultStoreWasUpdated.bind(this)),
      QueryStore.listen(this.queryStoreWasUpdated.bind(this))
    ];
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  recommendationsStoreWasUpdated() {
    this.setState({recommendations: RecommendationsStore.store});
  }

  resultStoreWasUpdated(data) {
    this.setState({results: ResultListStore.store});
    this.updateRecommendations(data);
  }

  queryStoreWasUpdated() {
    this.setState({query: QueryStore.store});
  }

  updateRecommendations(data) {
    RecommendationActions.request(data.result.map(element => element.identifiers[0]));
  }

  renderSearchResult() {
    return (
      <div>
        <h2>Søgeresultat</h2>
        <SearchResultList data={{results: this.state.results}} loadMore={QueryActions.loadMore} />
      </div>
    );
  }

  renderDefaultRecommendations() {
    return (
      <RecommendationContainer />
    );
  }

  render() {
    const result = this.state.query.query.length && this.renderSearchResult() || this.renderDefaultRecommendations();

    return (
      <div className={'search-result columns'} >
        {result}
      </div>
    );
  }
}

SearchResultContainer.displayName = 'SearchResultContainer';
SearchResultContainer.propTypes = {
  recommendations: React.PropTypes.object
};
