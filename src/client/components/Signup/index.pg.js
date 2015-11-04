'use strict';

/**
 * @file
 * This file is the entrypoint for the Signup component
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './pg/Signup.pg.component.js';

const props = window.SIGNUP_PROPS || {};

ReactDOM.render(<Signup {...props} />, document.getElementById('signup'), null);
