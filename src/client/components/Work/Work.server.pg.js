'use strict';
import React from 'react';
import ReactDOM from 'react-dom/server';
import WorkContainer from './WorkContainer.container.component';
import WorkLayout from './WorkLayout.pg.component';

/**
 * Render component for server use.
 *
 * @return object the object contains to properties: 'search' constains the component
 * and 'props' is a stringified version of the properties for client side export.
 */
export default function workServer(props) {
  const id = props.id || [];
  const work = ReactDOM.renderToString(
    <WorkContainer id={id} work={props.work} workLayout={WorkLayout} />
  );
  return {
    work,
    props: JSON.stringify(props)
  };
}
