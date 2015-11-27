'use strict';

import React from 'react';
import Loader from '../../Loader.component';

export default class FrontPageRecommendationsLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container' >
        <ul className='medium-block-grid-3 large-block-grid-3' >
          {this.props.workElement}
        </ul>
        <Loader pending={this.props.pending} />
      </div>
    );
  }
}

FrontPageRecommendationsLayout.displayName = 'FrontPageRecommendationsLayout';
FrontPageRecommendationsLayout.propTypes = {
  loader: React.PropTypes.element,
  pending: React.PropTypes.bool,
  workElement: React.PropTypes.arrayOf(React.PropTypes.element)
};
