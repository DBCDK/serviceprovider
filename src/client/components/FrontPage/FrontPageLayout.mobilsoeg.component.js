'use strict';

/**
 * @file
 * Frontpage container compoennts rendering the MobilSøg frontapge
 */

import React from 'react';

// Components
import NewsFrontPageContainerComponent from '../News/NewsFrontPageContainer.component';
import RecommendationContainer from '../Recommend/RecommendationContainer.component';
import SearchFieldContainer from '../searchfield/SearchFieldContainer.component';

// Layouts
import FrontPageRecommendationsLayout from './layouts/FrontPageRecommendationsLayout.component';


export default class FrontPageLayoutMobilsoeg extends React.Component {
  render() {
    return (
      <div className="frontpage-container" >
        <div className="frontpage-container--content row" >
          <div className="frontpage-container--search--container large-16 columns" >
            <div className="frontpage-container--search--searchfield" >
              <SearchFieldContainer />
            </div>
            <div className="frontpage-container--search--recommendations" >
              <RecommendationContainer layout={FrontPageRecommendationsLayout} />
            </div>
          </div>

          <div className="frontpage-container--news--container large-8 columns" >
            <div className="frontpage-container--news" >
              <NewsFrontPageContainerComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FrontPageLayoutMobilsoeg.displayName = 'FrontPageLayoutMobilsoeg';
