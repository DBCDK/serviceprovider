'use strict';

/**
 * @File
 * TODO some description
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

import ReceiptActions from '../components/Receipt/Receipt.action';

const fetchMobilSoegProfile = SocketClient('findMobilSoegProfile');
const isLoggedIn = SocketClient('isMobilSoegUserLoggedIn');
const saveLikeToMobilSoegProfile = SocketClient('saveLikeToMobilSoegProfile');
const deleteLikes = SocketClient('deleteLikesFromMobilSoegProfile');
const savePickupAgency = SocketClient('savePickupAgencyToMobilSoegProfile');

let ProfileActions = Reflux.createActions([
  'isLoggedIn', // Checks if the user is logged in and returns true/false based on that
  'isLoggedInResponse',
  'fetchMobilSoegProfile',
  'fetchMobilSoegProfileResponse',
  'saveLikeToMobilSoegProfile',
  'likeObject',
  'dislikeObject',
  'likeSaved',
  'dislikeObject',
  'deleteLikes',
  'savePickupAgencyToMobilSoegProfile',
  'savePickupAgencyToMobilSoegProfileResponse'
]);

ProfileActions.isLoggedIn.listen(isLoggedIn.request);
isLoggedIn.response(ProfileActions.isLoggedInResponse);

ProfileActions.fetchMobilSoegProfile.listen(fetchMobilSoegProfile.request);
fetchMobilSoegProfile.response(ProfileActions.fetchMobilSoegProfileResponse);

ProfileActions.saveLikeToMobilSoegProfile.listen(saveLikeToMobilSoegProfile.request);
saveLikeToMobilSoegProfile.response(ProfileActions.likeSaved);

ProfileActions.deleteLikes.listen(deleteLikes.request);
deleteLikes.response(ProfileActions.fetchMobilSoegProfile);

ProfileActions.savePickupAgencyToMobilSoegProfile.listen(savePickupAgency.request);
savePickupAgency.response(ProfileActions.savePickupAgencyToMobilSoegProfileResponse);

ReceiptActions.listen((order) => {
  savePickupAgency.request(order.agencyId);
});

export default ProfileActions;
