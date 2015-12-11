'use strict';

/**
 * @file
 * Setup service provicer
 */

import {Provider, AutoRequire} from 'dbc-node-serviceprovider';
import path from 'path';

// import clients
import Borchk from 'dbc-node-borchk';
import DdbContent from 'dbc-node-ddbcontent-client';
import EntitySuggest from 'dbc-node-entitysuggest';
import MobilSoegProfile from 'dbc-node-mobilsoeg-profile-client';
import MoreInfo from 'dbc-node-moreinfo-client';
import OpenAgency from 'dbc-node-openagency-client';
import OpenHoldingStatus from 'dbc-node-openholdingstatus-client';
import OpenOrder from 'dbc-node-openorder-client';
import OpenSearch from 'dbc-node-opensearch-client';
import OpenSuggest from 'dbc-node-opensuggest';
import OpenUserStatus from 'dbc-node-openuserstatus-client';
import PopSuggest from 'dbc-node-popsuggest';
import RankedRecommendations from 'dbc-node-ranked-recommendations-client';
import Recommendations from 'dbc-node-recommendations';

/**
 * Method for initializing all service clients and transforms
 *
 * @param config
 * @param logger
 * @param sockets
 * @returns {Provider}
 */
export default function initProvider(config, logger, sockets) {
  const provider = Provider(logger);
  provider.dispatcher(sockets);

  // Register all clients
  provider.registerServiceClient('borchk', Borchk(config.borchk));
  provider.registerServiceClient('ddbcontent', DdbContent(config.ddbcontent));
  provider.registerServiceClient('entitysuggest', EntitySuggest(config.entitysuggest));
  provider.registerServiceClient('mobilSoegProfile', MobilSoegProfile(config.mobilSoegProfile));
  provider.registerServiceClient('moreinfo', MoreInfo(config.moreinfo));
  provider.registerServiceClient('openagency', OpenAgency(config.openagency));
  provider.registerServiceClient('openholdingstatus', OpenHoldingStatus(config.openholdingstatus));
  provider.registerServiceClient('openorder', OpenOrder(config.openorder));
  provider.registerServiceClient('opensearch', OpenSearch(config.opensearch));
  provider.registerServiceClient('opensuggest', OpenSuggest(config.opensuggest));
  provider.registerServiceClient('openuserstatus', OpenUserStatus(config.openuserstatus));
  provider.registerServiceClient('popsuggest', PopSuggest(config.popsuggest));
  provider.registerServiceClient('recommendranked', RankedRecommendations(config.recommendranked));
  provider.registerServiceClient('recommend', Recommendations(config.recommend));

  // Transforms are autorequired to lessen boilerplate code
  AutoRequire(path.join(__dirname, 'transformers'), 'transform.js').map(provider.registerTransform);

  return provider;
}
