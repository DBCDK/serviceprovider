'use strict';

import React from 'react';

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
        {this.props.loader}
        {this.props.loadMoreButton}
      </div>
    );
  }
}

DisplayResultStandardLayout.displayName = 'DisplayResultStandardLayout';
DisplayResultStandardLayout.propTypes = {
  loadMoreButton: React.PropTypes.element,
  loader: React.PropTypes.element,
  workElement: React.PropTypes.arrayOf(React.PropTypes.element)
};
