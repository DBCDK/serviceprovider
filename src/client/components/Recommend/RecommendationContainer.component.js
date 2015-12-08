'use strict';
/**
 * @file
 * Container for showing default recommendations
 */

import React from 'react';

// Actions
import RecommendationActions from './Recommendations.action';

// Stores
import ProfileStore from '../../stores/Profile.store';
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
      recommendations: RecommendationStore.store,
      result: [],
      profile: ProfileStore.getState()
    };

    this.unsubscribe = [
      ProfileStore.listen(() => this.gotProfile()),
      RecommendationStore.listen(() => this.gotRecommendations())
    ];
  }

  componentWillMount() {
    if (typeof window !== 'undefined' && window.ssr_recommendations && window.ssr_recommendations.length > 0) {
      RecommendationStore.onResponse(JSON.parse(window.ssr_recommendations)[0]);
    }
    else if (this.props.recommendations && this.props.recommendations.length > 0) {
      this.state.recommendations.result = this.props.recommendations[0];
    }
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  gotProfile() {
    if (!ProfileStore.store.pending) {
      const profileLikes = ProfileStore.store.profile.likes;
      this.requestRecommendations(profileLikes);
    }
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
  layout: React.PropTypes.func,
  recommendations: React.PropTypes.array
};

export default RecommendationContainer;
