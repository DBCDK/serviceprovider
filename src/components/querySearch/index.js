'use strict';
import React from 'react';
import QueryField from 'dbc-react-querystring';
import '../../styles/app.scss';

React.render(<QueryField query={window.QUERYSTRING_PROPS || []}/>, document.getElementById('search'));
