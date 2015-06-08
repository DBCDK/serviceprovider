'use strict';
import React from 'react';
import QueryString from 'dbc-react-querystring';
import '../../styles/app.scss';


/**
 * Client side rendering of the QueryString component
 *
 * THIS IS A DUMMY IMPLEMENTATION
 * This component should implemented in the main search field
 *
 */
React.render(<QueryString query={window.QUERYSTRING_PROPS || []}/>, document.getElementById('search'));
