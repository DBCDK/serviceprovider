/**
 * @file
 * Basic service provider. Discovers and initializes the transforms.
 */

const caller = require('./caller');
const storage = require('../transformers/storage');
const listObserver = require('../transformers/aggregations/list.observer');
const aggregationTransformer = require('../transformers/aggregations/transformer');
const statusTransformer = require('../transformers/status');
import suggestTransformer from '../transformers/suggest.js';
import facetTransformer from '../transformers/facets';
import searchTransformer from '../transformers/search';
import librariesTransformer from '../transformers/libraries';
import userTransformer from '../transformers/user';
import renewTransformer from '../transformers/renew';
import orderTransformer from '../transformers/order';
import workTransformer from '../transformers/work';
import availabilityTransformer from '../transformers/availability';
import {ddbcms, news, events, library} from '../transformers/ddbcms';
import {testTransformer} from '../transformers/testTransformer.js';
import recommendTransformer from '../transformers/recommend';
import infomediaTransformer from '../transformers/infomedia';
import openformatTransformer from '../transformers/openformat';
import holdingsitemsTransformer from '../transformers/holdingsitems';

/**
 * Initialization of the provider and the underlying services.
 *
 * @param {Object} config Object containing the necessary parameters.
 *
 * @api public
 */
export default function Provider() {
  storage.onUpdate(listObserver.onUpdate);
  storage.onDelete(listObserver.onDelete);
  storage.onCreate(listObserver.onCreate);

  /**
   * Structure containing all the new transformers.
   */
  const transformerMap = {
    ddbcms: ddbcms,
    events: events,
    news: news,
    library: library,
    renew: renewTransformer,
    search: searchTransformer,
    libraries: librariesTransformer,
    facets: facetTransformer,
    recommend: recommendTransformer,
    suggest: suggestTransformer,
    user: userTransformer,
    order: orderTransformer,
    work: workTransformer,
    storage: storage.storageTransformer,
    test: testTransformer,
    availability: availabilityTransformer,
    status: statusTransformer,
    aggregation: aggregationTransformer,
    infomedia: infomediaTransformer,
    openformat: openformatTransformer,
    holdingsitems: holdingsitemsTransformer
  };

  // we are going to reimplement a simpler mechanism to call the transformers
  function execute(name, params, context) {
    // eslint-disable-line no-unused-vars
    return caller(transformerMap, context).call(name, params);
  }

  function availableTransforms() {
    return Object.keys(transformerMap);
  }

  function hasTransformer(name) {
    return transformerMap.hasOwnProperty(name);
  }

  return {
    availableTransforms,
    execute,
    hasTransformer
  };
}
