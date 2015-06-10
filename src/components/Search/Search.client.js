'use strict';
import React from 'react';
import Search from './Search.react';
import '../../styles/app.scss';

/**
 * Client side rendering of the QueryString component
 *
 * THIS IS A DUMMY IMPLEMENTATION
 * This component should implemented in the main search field
 *
 */

  //{value, index, type, cql},
const data = [
  {value: 'hest', type: 'term.type'},
  {value: 'æble', type: 'term.type'},
  {value: 'banan', type: 'term.type'},
  {value: 'test', type: 'term.type'},
  {value: 'fisk', type: 'term.type'}
];

React.render(<Search query={window.QUERYSTRING_PROPS.query || []} elements={data}/>, document.getElementById('search'));


