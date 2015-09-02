'use strict';
/**
 * @file
 * Component that synchronizes the url and the QueryStore state
 *
 * This component does not render anything only updates QueryStore and url history
 */

import React from 'react';
import Reflux from 'reflux';
import QueryStore from '../../stores/QueryStore.store.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import ComponentUtils from '../../utils/ComponentHelpers.util.js';

const Query = React.createClass({
  propTypes: {
    queryLocation: React.PropTypes.string.isRequired
  },
  mixins: [
    Reflux.connect(QueryStore, 'query'),
    ComponentUtils
  ],
  updateHistoryState(query) {
    if (this.isClient() && window.location.search !== query.search) {
      const queryString = `${this.props.queryLocation + query.search}`;
      history.pushState(null, null, window.location.origin + queryString);
    }
  },

  componentDidMount() {
    if (this.isClient()) {
      window.addEventListener('popstate', () => QueryActions.update(window.location.search));
    }
  },
  render() {
    this.updateHistoryState(this.state.query);
    return false;
  }
});

export default Query;
