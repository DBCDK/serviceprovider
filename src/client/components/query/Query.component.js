'use strict';

/**
 * @file
 * Component that synchronizes the url and the QueryStore state
 * This component does not render anything only updates QueryStore and url
 * history.
 * if props.shouldDoPageLoad is true an actual pageload will happen and not
 * only a pushstate.
 */

import React from 'react';
import Reflux from 'reflux';
import QueryStore from '../../stores/QueryStore.store.js';
import QueryActions from '../../actions/QueryUpdate.action.js';
import ComponentUtils from '../../../utils/ComponentHelpers.util.js';

const Query = React.createClass({
  displayName: 'QueryComponent',
  propTypes: {
    queryLocation: React.PropTypes.string.isRequired,
    shouldDoPageLoad: React.PropTypes.bool
  },

  mixins: [
    Reflux.connect(QueryStore, 'query'),
    ComponentUtils
  ],

  componentDidMount() {
    if (this.isClient()) {
      window.addEventListener('popstate', () => QueryActions.update(window.location.search));
    }
  },

  updateHistoryState(query) {
    if (this.isClient() && window.location.search !== query.search) {
      const queryString = `${this.props.queryLocation + query.search}`;

      if (this.props.shouldDoPageLoad) {
        window.location = queryString;
      }
      else {
        history.pushState(null, null, window.location.origin + queryString);
      }
    }
  },

  render() {
    this.updateHistoryState(this.state.query);
    return false;
  }
});

export default Query;
