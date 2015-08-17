'use strict';

import React from 'react';


const Loader = React.createClass({

  displayName: function() {
    return 'ReactLoader';
  },

  propTypes: {
    pending: React.PropTypes.bool.isRequired
  },

  render() {
    return this.props.pending && <span className='loader'>loader...</span> || <span className='no-loader'/>;
  }
});

export default Loader;
