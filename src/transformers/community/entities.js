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

  router.get('/:id/posts', getRelatedList('group', 'post', postMap, getSchemaDefinition(swagger, 'Post')));
  router.get('/:id/likes', getRelatedList('group', 'like', likeMap, getSchemaDefinition(swagger, 'Like')));
  router.get('/:id/follows', getRelatedList('group', 'follow', followMap, getSchemaDefinition(swagger, 'Follow')));
  router.get('/:id/flags', getRelatedList('group', 'flag', flagMap, getSchemaDefinition(swagger, 'Flag')));

  return router;
}

/**
 * Returns post router.
 *
 * @returns {Object}
 */
export function post() {
  const router = createCRUD('entity', 'post', Router(), postMap, getSchemaDefinition(swagger, 'Post'));

  router.get('/:id/comments', getRelatedList('post', 'comment', commentMap, getSchemaDefinition(swagger, 'Comment')));
  router.get('/:id/likes', getRelatedList('post', 'like', likeMap, getSchemaDefinition(swagger, 'Like')));
  router.get('/:id/follows', getRelatedList('post', 'follow', followMap, getSchemaDefinition(swagger, 'Follow')));
  router.get('/:id/flags', getRelatedList('post', 'flag', flagMap, getSchemaDefinition(swagger, 'Flag')));

  return router;
}

/**
 * Returns comment router.
 *
 * @returns {Object}
 */
export function comment() {
  const router = createCRUD('entity', 'comment', Router(), commentMap, getSchemaDefinition(swagger, 'Comment'));

  router.get('/:id/likes', getRelatedList('comment', 'like', likeMap, getSchemaDefinition(swagger, 'Like')));
  router.get('/:id/follows', getRelatedList('comment', 'follow', followMap, getSchemaDefinition(swagger, 'Follow')));
  router.get('/:id/flags', getRelatedList('comment', 'flag', flagMap, getSchemaDefinition(swagger, 'Flag')));

  return router;
}

/**
 * Returns comment router.
 *
 * @returns {Object}
 */
export function review() {
  const router = createCRUD('entity', 'review', Router(), reviewMap, getSchemaDefinition(swagger, 'Review'));

  router.get('/:id/likes', getRelatedList('review', 'like', likeMap, getSchemaDefinition(swagger, 'Like')));
  router.get('/:id/flags', getRelatedList('review', 'flag', flagMap, getSchemaDefinition(swagger, 'Flag')));

  return router;
}
