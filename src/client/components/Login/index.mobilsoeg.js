'use strict';

/**
 * @file
 * This file is the entrypoint for the Profile component
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './mobilsoeg/Login.mobilsoeg.component.js';

let agencyId = typeof window !== 'undefined' ? window.agencyId : '775100';
ReactDOM.render(<Login agencyId={agencyId} />, document.getElementById('login'), null);
