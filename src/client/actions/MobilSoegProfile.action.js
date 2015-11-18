'use strict';

/**
 * @File
 * TODO some description
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const isLoggedIn = SocketClient('isMobilSoegUserLoggedIn');
const fetchMobilSoegProfile = SocketClient('findMobilSoegProfile');

let MobilSoegProfileActions = Reflux.createActions([
  'isLoggedIn', // Checks if the user is logged in and returns true/false based on that
  'isLoggedInResponse',
  'fetchMobilSoegProfile',
  'fetchMobilSoegProfileResponse'
]);

MobilSoegProfileActions.isLoggedIn.listen(isLoggedIn.request);
isLoggedIn.response(MobilSoegProfileActions.isLoggedInResponse);

MobilSoegProfileActions.fetchMobilSoegProfile.listen(fetchMobilSoegProfile.request);
fetchMobilSoegProfile.response(MobilSoegProfileActions.fetchMobilSoegProfileResponse);

export default MobilSoegProfileActions;
