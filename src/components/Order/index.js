'use strict';
import React from 'react';
import {Order} from 'dbc-react-components';

/**
 * Entry point for Order
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */

React.render(<Order order={window.ORDER_PROPS || {}} />, document.getElementById('order'));
