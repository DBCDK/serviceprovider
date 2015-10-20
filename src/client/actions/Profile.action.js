'use strict';

/**
 * @file
 * Profile Actions
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const fetchEvent = SocketClient('getProfile');
const saveEvent = SocketClient('updateProfile');
const openAgency = SocketClient('getMultiOpenAgency');
const saveLike = SocketClient('saveLike');
const resetLikes = SocketClient('resetLikes');
const checkBorrowerAndSaveToProfileSocket = SocketClient('checkBorrowerAndSaveToProfile');

const ProfileActions = Reflux.createActions([
  'toggleEdit',
  'updateAttribute',
  'updateImageUrl',
  'saveProfile',
  'updateProfile',
  'fetchProfile',
  'confirmSaveProfile',
  'addLibraryToFavorites',
  'removeLibraryFromFavorites',
  'updateBorrowerIDForLibrary',
  'libraryIdUpdated',
  'libraryIdUpdatedResponse',
  'setLibraryAsDefault',
  'resolveFavoriteLibraries',
  'checkBorrowerAndSaveToProfile',
  'checkBorrowerAndSaveToProfileResponse',
  'likeObject',
  'dislikeObject',
  'saveLike',
  'likeSaved',
  'resetLikes',
  'likesReset'
]);

ProfileActions.saveProfile.listen(saveEvent.request);
saveEvent.response(ProfileActions.confirmSaveProfile);

ProfileActions.saveLike.listen(saveLike.request);
saveLike.response(ProfileActions.likeSaved);

ProfileActions.fetchProfile.listen(fetchEvent.request);
fetchEvent.response(ProfileActions.updateProfile);

ProfileActions.libraryIdUpdated.listen(openAgency.request);
openAgency.response(ProfileActions.libraryIdUpdatedResponse);

ProfileActions.resetLikes.listen(resetLikes.request);

ProfileActions.checkBorrowerAndSaveToProfile.listen(checkBorrowerAndSaveToProfileSocket.request);
checkBorrowerAndSaveToProfileSocket.response(ProfileActions.checkBorrowerAndSaveToProfileResponse);

export default ProfileActions;
