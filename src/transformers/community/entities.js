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

/**
 * Returns comment router.
 *
 * @returns {Object}
 */
export function review() {

  const map = {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id',
    reference: 'entity_ref',
    rating: 'rating'
  };

  return createCRUD('entity', 'review', Router(), map, getSchemaDefinition(swagger, 'Review'));
}
