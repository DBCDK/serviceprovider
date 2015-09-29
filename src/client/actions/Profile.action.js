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
  'likeObject',
  'dislikeObject',
  'saveLike',
  'likeSaved'
]);

ProfileActions.saveProfile.listen(saveEvent.request);
saveEvent.response(ProfileActions.confirmSaveProfile);

ProfileActions.saveLike.listen(saveLike.request);
saveLike.response(ProfileActions.likeSaved);

ProfileActions.fetchProfile.listen(fetchEvent.request);
fetchEvent.response(ProfileActions.updateProfile);

ProfileActions.libraryIdUpdated.listen((val) => {
  openAgency.request(val);
});
openAgency.response(ProfileActions.libraryIdUpdatedResponse);

export default ProfileActions;
