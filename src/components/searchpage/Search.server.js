'use strict';

/**
 * @file
 * Serverside entry point for the search page
 */


import React from 'react';
import Search from './SearchPageLayout.component.js';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function querySearchServer(props) {
  const {elements, query, recommendations} = props;
  const search = React.renderToString(
    <Search
      elements={elements || []}
      query={query || []}
      recommendations={recommendations} />
  );
  return {
    search: search,
    props: JSON.stringify(props)
  };
}
