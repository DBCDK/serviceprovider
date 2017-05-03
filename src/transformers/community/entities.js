import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import getRelatedList from './utils/getRelatedList';
import {createMap} from './utils/createMap';
import {groupMap, postMap, commentMap, reviewMap, likeMap, followMap, flagMap} from './maps';
import {getSpecification, getSchemaDefinition} from '../../swaggerFromSpec';
const swagger = getSpecification();

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

  router.get('/:id/posts', getRelatedList('entity', 'entity', 'post', postMap, getSchemaDefinition(swagger, 'Post')));
  router.get('/:id/likes', getRelatedList('entity', 'action', 'like', likeMap, getSchemaDefinition(swagger, 'Like')));
  router.get('/:id/follows', getRelatedList('entity', 'action', 'follow', followMap, getSchemaDefinition(swagger, 'Follow')));
  router.get('/:id/flags', getRelatedList('entity', 'action', 'flag', flagMap, getSchemaDefinition(swagger, 'Flag')));

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
