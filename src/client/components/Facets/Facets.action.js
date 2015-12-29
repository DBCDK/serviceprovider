'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
import QueryParser from '../../../utils/QueryParser.util';

const fetchFacetsEvent = SocketClient('getOpenSearchFacets');
const fetchMoreFacetTermsEvent = SocketClient('getOpenSearchFacetTerms');

const FacetsActions = Reflux.createActions([
  'fetchFacets',
  'updateFacets',
  'updateSingleFacet',
  'getMoreFacetTerms',
  'selectFacetButton',
  'deselectFacetButton',
  'toggleFacetDisplay'
]);

FacetsActions.fetchFacets.listen(fetchFacetsEvent.request);
fetchFacetsEvent.response(FacetsActions.updateFacets);

FacetsActions.getMoreFacetTerms.listen((query, facetname, facetcount) => {
  fetchMoreFacetTermsEvent.request({
    q: QueryParser.objectToCql(query),
    facet: facetname,
    number: facetcount + 5
  });
});
fetchMoreFacetTermsEvent.response(FacetsActions.updateSingleFacet);

export default FacetsActions;
