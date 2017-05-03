import {createMap} from './createMap';

/**
 * Constructs a selector filtering to objects related to parent.
 *
 * @param relatedElvisType (profile|entity|action)
 * @param type (profile|group|post|comment|quarantine|like|flag|follow) The type of object that is requested
 * @param id Id of the parent relation
 * @returns {Object}
 */
function getSelector(relatedElvisType, type, id) {
  const selector = {type};

  if (relatedElvisType === 'profile') {
    selector.profile_ref = id;
  }
  else if (relatedElvisType === 'entity') {
    selector.entity_ref = id;
  }

  return selector;
}

/**
 * Constructs request to get a related list of objects.
 *
 * @param relatedElvisType (profile|entity|action)
 * @param elvisType (profile|entity|action) Elivs type of the objects that are requested
 * @param type (profile|group|post|comment|quarantine|like|flag|follow) The serviceprovider type of object that is requested
 * @param map Mapping between Elvis objects and serviceprovider objects
 * @param schema Object schema
 * @returns {Function}
 */
export default function getRelatedList(relatedElvisType, elvisType, type, map, schema) {
  return (req, res) => {
    const provider = req.app.get('serviceProvider');
    const context = req.context;
    context.crud = true;

    const query = Object.assign(
      {},
      req.params,
      req.body,
      req.query,
      {selector: getSelector(relatedElvisType, type, req.params.id)},
      {
        _meta: {
          type: type,
          elvisType: elvisType,
          schemaMap: createMap(schema, map),
          schema: schema
        }
      }
    );

    provider.execute('listEntities', query, context).then(result => res.json(result));
  };
}
