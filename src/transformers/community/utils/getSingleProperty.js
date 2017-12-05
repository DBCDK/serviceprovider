import {createMap} from './createMap';
import {log} from '../../../utils';

const typeMapping = {
  action: 'Action',
  group: 'Entity',
  profile: 'Profile'
};

/**
 * Mapping betweenn Elvis and SP. Left side represents Elvis, right side SP
 *
 * @type {{name: string}}
 */
const selectorMapping = {
  name: 'username',
  title: 'groupname',
  owner_id: 'profile_id',
  entity_ref: 'group_id'
};

/**
 * Constructs request to get a single property on an specific item.
 *
 * @param {string[]} parameters
 * @param type (profile|group|post|comment|quarantine|like|flag|follow) The serviceprovider type of object that is requested
 * @param map Mapping between Elvis objects and serviceprovider objects
 * @param schema Object schema
 * @returns {Function}
 */
export default function getSingleProperty(parameters, type, map, schema) {
  return (req, res) => {
    if (!Array.isArray(parameters)) {
      log.error(`Expected an array of parameters got ${typeof parameters}`, {
        parameters: parameters
      });
    }

    const provider = req.app.get('serviceProvider');
    const context = req.context;
    context.crud = true;
    const selector = {};
    parameters.forEach(parameter => {
      selector[parameter] = req.params[selectorMapping[parameter]];
    });

    const query = Object.assign(
      {},
      req.params,
      req.body,
      req.query,
      {selector: selector},
      {
        _meta: {
          type: type,
          elvisType: typeMapping[type].toLowerCase(),
          schemaMap: createMap(schema, map),
          schema: schema
        }
      }
    );

    provider
      .execute('getSingleProperty', query, context)
      .then(result => res.json(result));
  };
}
