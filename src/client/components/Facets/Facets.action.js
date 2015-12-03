'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const fetchFacetsEvent = SocketClient('getOpenSearchFacets');

const FacetsActions = Reflux.createActions(['fetchFacets', 'updateFacets']);

FacetsActions.fetchFacets.listen(fetchFacetsEvent.request);
fetchFacetsEvent.response(FacetsActions.updateFacets);

export default FacetsActions;
