'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Work from './Work.component.js';

/**
 * Client side rendering of the Search component
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */
ReactDOM.render(<Work id={window.QUERYSTRING_PROPS || {}} />, document.getElementById('work'));
