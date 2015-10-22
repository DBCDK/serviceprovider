'use strict';
/**
 * @file
 * entry point for the search page
 */

import React from 'react';
import ReactDOM from 'react-dom';
import FronpageContainer from './FrontpageContainer.component';

/**
 * Client side rendering of the Frontpage Component
 */
ReactDOM.render(
  <FronpageContainer
    application={window.APPLICATION || 'mobilsoeg'}
  />,
  document.getElementById('frontpage-container-component')
);
