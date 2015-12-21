'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const getPickupAgencyList = SocketClient('getPickupAgencyList');

const LibraryAffiliateDropDownActions = Reflux.createActions([
  'getLibraryAffiliatesForAgency',
  'getLibraryAffiliatesForAgencyResponse',
  'libraryAffiliateSelected'
]);

LibraryAffiliateDropDownActions.getLibraryAffiliatesForAgency.listen(getPickupAgencyList.request);
getPickupAgencyList.response(LibraryAffiliateDropDownActions.getLibraryAffiliatesForAgencyResponse);

export default LibraryAffiliateDropDownActions;
