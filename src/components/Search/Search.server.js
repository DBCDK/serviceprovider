'use strict';
import React from 'react';
import Search from './Search.component';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function querySearchServer (props) {
  const {query, elements} = props;
  const search = React.renderToString(<Search query={query || []} elements={elements || []}/>);
  return {
    search,
    props: JSON.stringify(props)
  };
}
