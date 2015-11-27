'use strict';

/**
 * @file
 * Rendering a LoadMore button
 */

import React from 'react';

export default class LoadMore extends React.Component {
  constructor() {
    super();
  }

  render() {
    let classes = ['search-result--loadmore', 'button', 'primary'];
    return (
      <button
        className={classes.join(' ')}
        key={this.props.button}
        onClick={this.props.update.bind(null, null)}
      >
        {this.props.button}
      </button>
    );
  }
}

LoadMore.displayName = 'Loadmore';
LoadMore.propTypes = {
  button: React.PropTypes.string,
  update: React.PropTypes.func
};

