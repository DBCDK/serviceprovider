'use strict';

/**
 * @File
 * UI actions
 */

import Reflux from 'reflux';

let UIActions = Reflux.createActions([
  'toggleTopBarMenu' // Checks if the user is logged in and returns true/false based on that
]);

export default UIActions;
