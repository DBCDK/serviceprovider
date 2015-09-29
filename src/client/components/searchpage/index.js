'use strict';
/**
 * @file
 * entry point for the search page
 */

import React from 'react';
import Search from './SearchPageLayout.component.js';

/**
 * Client side rendering of the Search component
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */

React.render(
  <Search
    query={window.QUERYSTRING_PROPS.query || {}}
    recommendations={window.QUERYSTRING_PROPS.recommendations || {}}
    />,
  document.getElementById('search')
);

