'use strict';

import React, {PropTypes} from 'react';

import CoverImage from '../CoverImage/CoverImageContainer.component';
import BibliographicData from '../ResultListView/DisplayBibliographicData/DisplayBibliographicData.component';

class WorkListComponent extends React.Component {
  componentDidMount() {
  }
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
      <div className="worklist">
        {this.props.title &&
          <h2 className="worklist--title">{this.props.title}</h2>
          || ''
        }
        <ul className="result-list medium-block-grid-2">
          {this.props.works.map((val) => {
            return (
              <BibliographicData
                coverImage={coverImage}
                creator={val.creator}
                identifiers={val.identifiers}
                key={val.identifiers[0]}
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

WorkListComponent.displayName = 'WorkList.component';
WorkListComponent.propTypes = {
  works: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default WorkListComponent;
