'use strict';
import React from 'react';
import Work from './Work.component.js';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function workServer(props) {
  const work = React.renderToString(
    <Work id={props.id || []} work={props.work} />
  );
  return {
    work,
    props: JSON.stringify(props)
  };
}
