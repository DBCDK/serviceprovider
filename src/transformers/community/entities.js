import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {getSpecification, getSchemaDefinition} from '../../swaggerFromSpec';
const swagger = getSpecification();

/**
 * Returns group router.
 *
 * @returns {Object}
 */
export function group() {

  const map = {
    body: 'contents',
    profile_id: 'owner_id',
    media: 'attributes.media'
  };

  return createCRUD('entity', 'group', Router(), map, getSchemaDefinition(swagger, 'Group'));
}

/**
 * Returns post router.
 *
 * @returns {Object}
 */
export function post() {

  const map = {
    body: 'contents',
    profile_id: 'owner_id',
    group_id: 'entity_ref'
  };

  return createCRUD('entity', 'post', Router(), map, getSchemaDefinition(swagger, 'Post'));
}

/**
 * Returns comment router.
 *
 * @returns {Object}
 */
export function comment() {

  const map = {
    body: 'contents',
    profile_id: 'owner_id',
    post_id: 'entity_ref'
  };

  return createCRUD('entity', 'comment', Router(), map, getSchemaDefinition(swagger, 'Comment'));
}
