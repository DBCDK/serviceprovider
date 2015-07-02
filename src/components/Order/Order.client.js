'use strict';
import React from 'react';
import Order from './Order.component.js';
import '../../styles/app.scss';

/**
 * Client side rendering of the Order component
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */

React.render(<Order order={window.QUERYSTRING_PROPS || {}} />, document.getElementById('order'));
