import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {generateSwagger} from '../../swaggerFromSpec';
const swagger = generateSwagger();

/**
 * Returns group router.
 *
 * @returns {*}
 */
export function group() {

  const map = {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id'
  };

  return createCRUD('entity', 'group', Router(), map, swagger.definitions.Group);
}

/**
 * Returns post router.
 *
 * @returns {*}
 */
export function post() {

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

  return createCRUD('entity', 'post', Router(), map, swagger.definitions.Post);
}

/**
 * Returns comment router.
 *
 * @returns {*}
 */
export function comment() {

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

  return createCRUD('entity', 'comment', Router(), map, swagger.definitions.Comment);
}

/**
 * Returns like router.
 *
 * @returns {*}
 */
export function like() {

  const remap = {
    id: 'id',
    entity_id: 'entity_ref',
    profile_id: 'profile_ref',
    type: 'type'
  };

  const schema = {
    properties: {
      created_epoch: {type: 'number', format: 'integer'},
      modified_epoch: {type: 'number', format: 'integer'},
      modified_by: {type: 'number', format: 'integer'},
      id: {type: 'number', format: 'integer'},
      owner_id: {type: 'number', format: 'integer'},
      entity_id: {type: 'number', format: 'integer'},
      profile_id: {type: 'number', format: 'integer'}
    }
  };

  return createCRUD('action', 'like', Router(), remap, schema);
}

/**
 * Returns like router.
 *
 * @returns {*}
 */
export function follow() {

  const remap = {
    id: 'id',
    entity_id: 'entity_ref',
    profile_id: 'profile_ref',
    type: 'type'
  };

  const schema = {
    properties: {
      created_epoch: {type: 'number', format: 'integer'},
      modified_epoch: {type: 'number', format: 'integer'},
      modified_by: {type: 'number', format: 'integer'},
      id: {type: 'number', format: 'integer'},
      owner_id: {type: 'number', format: 'integer'},
      entity_id: {type: 'number', format: 'integer'},
      profile_id: {type: 'number', format: 'integer'}
    }
  };

  return createCRUD('action', 'follow', Router(), remap, schema);
}
