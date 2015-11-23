'use strict';

/**
 * @file
 * Frontpage container compoennts rendering the MobilSøg frontapge
 */

import React from 'react';

// Components
import NewsFrontPageContainerComponent from '../News/NewsFrontPageContainer.component';
import RecommendationContainer from '../Recommend/RecommendationContainer.mobilsoeg.component';
import SearchFieldContainer from '../searchfield/SearchFieldContainer.component';
import Query from '../query/Query.component.js';

// Layouts
import FrontPageRecommendationsLayout from './layouts/FrontPageRecommendationsLayout.component';


export default class FrontPageLayoutMobilsoeg extends React.Component {
  render() {
    return (
      <div className="frontpage-container" >
        <div className="frontpage-container--content row" >
          <div className="frontpage-container--search--container large-16 columns" >
            <div className="frontpage-container--search--searchfield" >
              <Query queryLocation='/search' shouldDoPageLoad />
              <SearchFieldContainer />
            </div>
            <div className="frontpage-container--search--recommendations" >
              <RecommendationContainer layout={FrontPageRecommendationsLayout} />
            </div>
          </div>

          <div className="frontpage-container--news--container large-8 columns" >
            <div className="frontpage-container--news" >
              <NewsFrontPageContainerComponent loadNumberOfPosts="10" showNumberOfPosts="4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FrontPageLayoutMobilsoeg.displayName = 'FrontPageLayoutMobilsoeg';
