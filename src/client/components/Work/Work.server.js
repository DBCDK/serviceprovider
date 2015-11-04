'use strict';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Work from './Work.component.js';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function workServer(props) {
  const id = props.id || [];
  const work = ReactDOM.renderToString(
    <Work id={id} work={props.work} />
  );
  return {
    work,
    props: JSON.stringify(props)
  };
}
