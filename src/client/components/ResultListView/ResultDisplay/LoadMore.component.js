'use strict';
import React from 'react';

var Loadmore = React.createClass({
  displayName: 'Loadmore',

  propTypes: {
    button: React.PropTypes.string,
    update: React.PropTypes.func
  },

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
});

export default Loadmore;

