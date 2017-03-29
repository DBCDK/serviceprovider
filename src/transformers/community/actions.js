import {Router} from 'express';
import createCRUD from './utils/createCRUD';

/**
 * Returns like router.
 *
 * @returns {Object}
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
 * Returns follow router.
 *
 * @returns {Object}
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

/**
 * Returns Flag router.
 *
 * @returns {Object}
 */
export function flag() {

  const remap = {
    id: 'id',
    profile_id: 'profile_ref',
    flag_reason: 'attributes.flag_reason'
  };

  const schema = {
    properties: {
      created_epoch: {type: 'number', format: 'integer'},
      modified_epoch: {type: 'number', format: 'integer'},
      modified_by: {type: 'number', format: 'integer'},
      id: {type: 'number', format: 'integer'},
      owner_id: {type: 'number', format: 'integer'},
      entity_id: {type: 'number', format: 'integer'},
      profile_id: {type: 'number', format: 'integer'},
      flag_reason: {type: 'string'}
    }
  };

  return createCRUD('action', 'flag', Router(), remap, schema);
}

/**
 * Returns Quarantine router.
 *
 * @returns {Object}
 */
export function quarantine() {

  const remap = {
    id: 'id',
    profile_id: 'profile_ref',
    flag_reason: 'attributes.quarantine_reason',
    quarantine_flags: 'attributes.quarantine_flags'
  };

  const schema = {
    properties: {
      created_epoch: {type: 'number', format: 'integer'},
      modified_epoch: {type: 'number', format: 'integer'},
      modified_by: {type: 'number', format: 'integer'},
      id: {type: 'number', format: 'integer'},
      owner_id: {type: 'number', format: 'integer'},
      profile_id: {type: 'number', format: 'integer'},
      quarantine_reason: {type: 'string'},
      quarantine_flags:{type: 'array'}
    }
  };

  return createCRUD('action', 'flag', Router(), remap, schema);
}
