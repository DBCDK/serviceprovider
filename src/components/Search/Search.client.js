'use strict';
import React from 'react';
import Search from './Search.component';

/**
 * Client side rendering of the Search component
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */

React.render(<Search query={window.QUERYSTRING_PROPS.query || {}} />, document.getElementById('search'));


