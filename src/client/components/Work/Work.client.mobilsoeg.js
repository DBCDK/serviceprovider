'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import WorkContainer from './WorkContainer.container.component';
import WorkLayout from './WorkLayout.mobilsoeg.component';

/**
 * Client side rendering of the Search component
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */
ReactDOM.render(
  <WorkContainer
    id={window.QUERYSTRING_PROPS || {}}
    workLayout={WorkLayout}
  />,
  document.getElementById('work')
);
