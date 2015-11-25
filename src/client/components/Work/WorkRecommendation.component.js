'use strict';

import React, {PropTypes} from 'react';
import {take} from 'lodash';

import CoverImage from '../CoverImage/CoverImageContainer.component';
import BibliographicData from '../ResultListView/DisplayBibliographicData/DisplayBibliographicData.component';

class WorkRecommendationComponent extends React.Component {
  render() {
    const coverImage = {
      component: CoverImage,
      noCoverUrl: {
        appendWorkType: true,
        url: `/covers/no-cover-image-[WORKTYPE].png`
      },
      prefSize: 'detail_500'
    };

    return (
      <div className={'work--recommendations--' + this.props.type}>
        <ul className="small-block-grid-2">
          {take(this.props.recommendations, 6).map((val, index) => {
            return (
              <BibliographicData
                coverImage={coverImage}
                creator={val.creator}
                identifiers={val.identifiers}
                key={'recommendation_' + this.props.type + '_' + index}
                title={val.title}
                workType={val.workType}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

WorkRecommendationComponent.displayName = 'WorkRecommendation.component';
WorkRecommendationComponent.propTypes = {
  recommendations: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};

export default WorkRecommendationComponent;
