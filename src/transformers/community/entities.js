import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {createMap} from './utils/createMap';
import {getSpecification, getSchemaDefinition} from '../../swaggerFromSpec';
const swagger = getSpecification();

const groupMap = {
  body: 'contents',
  profile_id: 'owner_id',
  media: 'attributes.media'
};

const postMap = {
  body: 'contents',
  profile_id: 'owner_id',
  group_id: 'entity_ref',
  media: 'attributes.media'
};

const commentMap = {
  body: 'contents',
  profile_id: 'owner_id',
  post_id: 'entity_ref',
  media: 'attributes.media'
};

const reviewMap = {
  body: 'contents',
  profile_id: 'owner_id',
  reference: 'entity_ref',
  rating: 'attributes.rating',
  media: 'attributes.media'
};

function getSchema(type, map) {
  return createMap(getSchemaDefinition(swagger, type), map);
}

export const schemas = {
  group: getSchema('Group', groupMap),
  post: getSchema('Post', postMap),
  comment: getSchema('Comment', commentMap),
  review: getSchema('Review', reviewMap)
};

/**
 * Returns group router.
 *
 * @returns {Object}
 */
export function group() {
  const router = createCRUD('entity', 'group', Router(), groupMap, getSchemaDefinition(swagger, 'Group'));

  router.get('/:groupId/posts', (req, res) => {
    const provider = req.app.get('serviceProvider');
    const context = req.context;
    context.crud = true;

    const query = Object.assign(
      {},
      req.params,
      req.body,
      req.query,
      {selector: {
        type: 'post',
        entity_ref: req.params.groupId
      }},
      {
        _meta: {
          type: 'post',
          elvisType: 'entity',
          schemaMap: createMap(getSchemaDefinition(swagger, 'Post'), postMap),
          schema: getSchemaDefinition(swagger, 'Post')
        }
      }
    );

    provider.execute('listEntities', query, context).then(result => res.json(result));

  });

  return router;
}

/**
 * Returns post router.
 *
 * @returns {Object}
 */
export function post() {
  return createCRUD('entity', 'post', Router(), postMap, getSchemaDefinition(swagger, 'Post'));
}

/**
 * Returns comment router.
 *
 * @returns {Object}
 */
export function comment() {
  return createCRUD('entity', 'comment', Router(), commentMap, getSchemaDefinition(swagger, 'Comment'));
}

/**
 * Returns comment router.
 *
 * @returns {Object}
 */
export function review() {
  return createCRUD('entity', 'review', Router(), reviewMap, getSchemaDefinition(swagger, 'Review'));
}
