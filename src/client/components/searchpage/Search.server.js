'use strict';

/**
 * @file
 * Serverside entry point for the search page
 */

import React from 'react';
import ReactDOM from 'react-dom/server';
import Search from './SearchPageLayout.component.js';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function querySearchServer(props) {
  const elements = props.elements || [];
  const query = props.query || [];
  const recommendations = props.recommendations || null;
  const search = ReactDOM.renderToString(
    <Search
      elements={elements}
      query={query}
      recommendations={recommendations} />
  );
  return {
    search: search,
    props: JSON.stringify(props)
  };
}
