'use strict';
import React from 'react';
import Search from './Search.component';
import '../../styles/app.scss';

/**
 * Client side rendering of the QueryString component
 *
 * THIS IS A DUMMY IMPLEMENTATION
 * This component should implemented in the main search field
 *
 */
React.render(<Search query={window.QUERYSTRING_PROPS.query || {}} />, document.getElementById('search'));


