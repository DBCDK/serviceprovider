import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {generateSwagger} from '../../swaggerFromSpec';
const swagger = generateSwagger();

export const schemas = {
  group: {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id'
  },
  post: {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id',
    group_id: 'entity_ref'
  },
  comment: {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id',
    post_id: 'entity_ref'
  }
};

/**
 * Returns group router.
 *
 * @returns {Object}
 */
export function group() {
  const map = schemas.group;
  return createCRUD('entity', 'group', Router(), map, swagger.definitions.Group);
}

/**
 * Returns post router.
 *
 * @returns {Object}
 */
export function post() {
  const map = schemas.post;
  return createCRUD('entity', 'post', Router(), map, swagger.definitions.Post);
}

/**
 * Returns comment router.
 *
 * @returns {Object}
 */
export function comment() {
  const map = schemas.comment;
  return createCRUD('entity', 'comment', Router(), map, swagger.definitions.Comment);
}
