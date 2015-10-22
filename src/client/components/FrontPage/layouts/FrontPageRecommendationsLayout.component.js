'use strict';

import React from 'react';

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
        {this.props.loader}
      </div>
    );
  }
}

FrontPageRecommendationsLayout.displayName = 'FrontPageRecommendationsLayout';
FrontPageRecommendationsLayout.propTypes = {
  loader: React.PropTypes.element,
  workElement: React.PropTypes.arrayOf(React.PropTypes.element)
};
