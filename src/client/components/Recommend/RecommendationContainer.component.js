'use strict';
/**
 * @file
 * Container for showing default recommendations
 */

import React from 'react';

// Actions
import RecommendationActions from '../../actions/Recommendations.action';

// Stores
import ProfileStore from '../../stores/Profile.store';

// Components
import SearchResultList from '../searchresult/SearchResultList.component.js';

/**
 * Renders a container for Recommendations
 */
class RecommendationContainer extends React.Component {
  constructor() {
    super();

    this.unsubscribe = [
      ProfileStore.listen(() => this.gotProfile())
    ];
  }

  componentDidMount() {
    RecommendationActions.default();
  }

  componentWillUnmount() {
    this.unsubscribe.forEach(
      (unsubscriber) => {
        unsubscriber();
      }
    );
  }

  gotProfile() {
    const profileLikes = ProfileStore.store.likes;
    let likes = [];
    let dislikes = [];

    profileLikes.forEach((like) => {
      if (like.value === '1') {
        likes.push(like.item_id);
      }
      else {
        dislikes.push(like.item_id);
      }

      RecommendationActions.request({likes: likes, dislikes: dislikes});
    });
  }

  render() {
    return (
      <SearchResultList actions={this.props.actions} data={{results: this.props.data.recommendations}} />
    );
  }
}

RecommendationContainer.displayName = 'RecommendationContainer';
RecommendationContainer.propTypes = {
  actions: React.PropTypes.object,
  data: React.PropTypes.object
};

export default RecommendationContainer;
