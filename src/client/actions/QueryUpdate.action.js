'use strict';
import Reflux from 'reflux';

const QueryActions = Reflux.createActions(['reset', 'add', 'update', 'nextPage', 'prevousPage', 'queryUpdated', 'changedInput']);
export default QueryActions;
