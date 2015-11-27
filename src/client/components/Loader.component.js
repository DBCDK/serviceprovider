'use strict';

/**
 * @file
 * Component for displaying a simple loading indicator
 */

import React from 'react';

export default class LoaderComponent extends React.Component {
  render() {
    return this.props.pending ? <span className='loader' >loader...</span> :
      <span className='no-loader' />;
  }
}

LoaderComponent.displayName = 'LoaderComponent';
LoaderComponent.propTypes = {
  pending: React.PropTypes.bool.isRequired
};
