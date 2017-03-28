import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {generateSwagger} from '../../swaggerFromSpec';
const swagger = generateSwagger();

/**
 * Returns group router.
 *
 * @returns {*}
 */
export function group () {

  const map = {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id'
  };

  return createCRUD('group', Router(), map, swagger.definitions.Group);
}

/**
 * Returns post router.
 *
 * @returns {*}
 */
export function post () {

  const map = {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id',
    group_id: 'entity_ref'
  };

  return createCRUD('post', Router(), map, swagger.definitions.Post);
}

/**
 * Returns comment router.
 *
 * @returns {*}
 */
export function comment () {

  const map = {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id',
    post_id: 'entity_ref'
  };

  return createCRUD('comment', Router(), map, swagger.definitions.Comment);
}
