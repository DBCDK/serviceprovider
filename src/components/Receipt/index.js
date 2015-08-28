'use strict';
import React from 'react';
import {Receipt} from 'dbc-react-components';

/**
 * Client side rendering of the Receipt component
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */

React.render(<Receipt receipt={window.RECEIPT_PROPS || {}} />, document.getElementById('receipt'));
