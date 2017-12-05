import {createMap} from './createMap';

const typeMapping = {
  profile: 'Profile',
  quarantine: 'Action',
  review: 'Entity',
  group: 'Entity',
  post: 'Entity',
  comment: 'Entity',
  like: 'Action',
  follow: 'Action',
  flag: 'Action'
};
/**
 * Constructs a selector filtering to objects related to parent.
 *
 * @param relatedElvisType (profile|entity|action)
 * @param type (profile|group|post|comment|quarantine|like|flag|follow) The type of object that is requested
 * @param id Id of the parent relation
 * @returns {Object}
 */
export function getSelector(relatedType, type, id) {
  const selector = {type};

  if (relatedType === 'profile') {
    selector.profile_ref = id;
  } else if (typeMapping[relatedType] === 'Entity') {
    selector.entity_ref = id;
  }
  if (typeMapping[type] === 'Action') {
    selector['attributes.reference'] = {type: relatedType};
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
export function getRelatedList(relatedType, type, map, schema) {
  return (req, res) => {
    const provider = req.app.get('serviceProvider');
    const context = req.context;
    context.crud = true;

    const query = Object.assign(
      {},
      req.params,
      req.body,
      req.query,
      {selector: getSelector(relatedType, type, req.params.id)},
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
      .execute('listEntities', query, context)
      .then(result => res.json(result));
  };
}

export function getFullGroupView(map, schema) {
  return (req, res) => {
    const provider = req.app.get('serviceProvider');
    const context = req.context;
    context.crud = true;

    const counts = ['posts', 'likes', 'flags', 'follows'];
    const include = [
      'owner',
      {
        counts: ['likes', 'flags', 'comments'],
        name: 'posts',
        limit: req.query.postLimit || 10,
        offset: req.query.postOffset || 0,
        include: [
          'owner',
          {
            counts: ['likes', 'flags'],
            name: 'comments',
            limit: req.query.commentLimit || 2,
            offset: req.query.commentOffset || 0,
            include: ['owner']
          }
        ]
      }
    ];

    const query = Object.assign(
      {},
      req.params,
      req.body,
      req.query,
      {include},
      {counts},
      {selector: {type: 'group', id: req.params.id}},
      {
        _meta: {
          type: 'group',
          elvisType: 'entity',
          schemaMap: createMap(schema, map),
          schema: schema
        }
      }
    );

    provider
      .execute('getEntity', query, context)
      .then(result => res.json(result));
  };
}

export function getProfileActivity(map, schema) {
  return (req, res) => {
    const provider = req.app.get('serviceProvider');
    const context = req.context;
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    context.crud = true;

    const _include = [
      {name: 'activity_likes'},
      {name: 'activity_follows'},
      {name: 'activity_flags'},
      {name: 'activity_groups'},
      {name: 'activity_posts'},
      {name: 'activity_comments'},
      {name: 'activity_reviews'}
    ];

    const include = [];
    _include.forEach(inc => {
      include.push(Object.assign(inc, {limit: limit, offset: offset}));
    });

    const query = Object.assign(
      {},
      req.params,
      req.body,
      req.query,
      {include},
      {selector: {id: req.params.id}},
      {
        _meta: {
          elvisType: 'profile',
          schemaMap: createMap(schema, map),
          schema: schema
        }
      }
    );

    provider
      .execute('getEntity', query, context)
      .then(result => res.json(result));
  };
}
