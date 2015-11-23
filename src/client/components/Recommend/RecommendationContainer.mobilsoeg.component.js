'use strict';
/**
 * @file
 * Container for showing default recommendations
 */

import React from 'react';

// Actions
import RecommendationActions from './Recommendations.action';

// Stores
import MobilSoegProfileStore from '../../stores/MobilSoegProfile.store';
import RecommendationStore from './Recommendations.store';

// Components
import SearchResultList from '../searchresult/SearchResultList.component';

/**
 * Renders a container for Recommendations
 */
class RecommendationContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      recommendations: {
        result: [],
        pending: false,
        info: {more: false}
      },
      result: []
    };
  }

  componentDidMount() {
    this.unsubscribe = [
      MobilSoegProfileStore.listen(() => this.gotProfile()),
      RecommendationStore.listen(() => this.gotRecommendations())
    ];
  }

  shouldComponentUpdate(nextProps, nextState) {
    return JSON.stringify(this.state.result) !== JSON.stringify(nextState.result);
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  gotProfile() {
    const profileLikes = MobilSoegProfileStore.store.profile.likes;
    this.requestRecommendations(profileLikes);
  }

  requestRecommendations(profileLikes) {
    let likes = [];
    let dislikes = [];

    profileLikes.forEach((like) => {
      if (like.value === '1') {
        likes.push(like.item_id);
      }
      else {
        dislikes.push(like.item_id);
      }
    });

    RecommendationActions.request({likes: likes, dislikes: dislikes});
  }

  gotRecommendations() {
    this.setState({recommendations: RecommendationStore.store, result: RecommendationStore.store.result});
  }

  render() {
    return (
        <SearchResultList data={{results: this.state.recommendations}} layout={this.props.layout} />
    );
  }
}

RecommendationContainer.displayName = 'RecommendationContainer';
RecommendationContainer.propTypes = {
  layout: React.PropTypes.func
};

export default RecommendationContainer;
