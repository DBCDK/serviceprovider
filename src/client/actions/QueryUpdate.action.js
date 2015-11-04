'use strict';
import Reflux from 'reflux';

const QueryActions = Reflux.createActions(['reset', 'add', 'update', 'loadMore', 'prevousPage', 'queryUpdated', 'changedInput']);
export default QueryActions;
