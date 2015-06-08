'use strict';
import React from 'react';
import QueryString from 'dbc-react-querystring';
import '../../styles/app.scss';


/**
 * Client side rendering of the QueryString component
 */
React.render(<QueryString query={window.QUERYSTRING_PROPS || []}/>, document.getElementById('search'));
