'use strict';

/**
 * @file
 * Component for displaying a standdard search result layout
 */

import React from 'react';

// Components
import Loader from '../../Loader.component';

export default class DisplayResultStandardLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container' >
        <ul className='small-block-grid-2 medium-block-grid-3 large-block-grid-4' >
          {this.props.workElement}
        </ul>
        <Loader pending={this.props.pending} />
        {this.props.loadMoreButton}
      </div>
    );
  }
}

DisplayResultStandardLayout.displayName = 'DisplayResultStandardLayout';
DisplayResultStandardLayout.propTypes = {
  loadMoreButton: React.PropTypes.element,
  pending: React.PropTypes.bool,
  workElement: React.PropTypes.arrayOf(React.PropTypes.element)
};
