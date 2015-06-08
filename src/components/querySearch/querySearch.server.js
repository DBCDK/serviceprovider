'use strict';
import React from 'react';
import QueryString from 'dbc-react-querystring';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function querySearchServer (props) {
  const search = React.renderToString(<QueryString query={ props }/>);
  return {
    search,
    props: JSON.stringify(props)
  }
}