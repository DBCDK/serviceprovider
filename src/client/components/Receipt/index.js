'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Receipt from '../Receipt/Receipt.component';

/**
 * Client side rendering of the Receipt component
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */

const order = JSON.parse(window.PAGE_DATA || '') || {};
ReactDOM.render(<Receipt receipt={order} />, document.getElementById('page'));
