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
  return createCRUD('entity', 'group', Router(), groupMap, getSchemaDefinition(swagger, 'Group'));
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
