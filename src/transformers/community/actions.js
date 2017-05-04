import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {createMap} from './utils/createMap';
import {likeMap, followMap, flagMap, quarantineMap} from './maps';
import {getSpecification, getSchemaDefinition} from '../../swaggerFromSpec';
const swagger = getSpecification();

function getSchema(type, map) {
  return createMap(getSchemaDefinition(swagger, type), map);
}

export const schemas = {
  like: getSchema('Like', likeMap),
  follow: getSchema('Follow', followMap),
  flag: getSchema('Flag', flagMap),
  quarantine: {
    id: 'id',
    entity_id: 'entity_ref',
    profile_id: 'profile_ref',
    type: 'type',
    modified_epoch: 'modified_epoch',
    modified_by: 'modified_by',
    created_epoch: 'created_epoch',
    owner_id: 'owner_id',
    flag_reason: 'attributes.quarantine_reason',
    quarantine_flags: 'attributes.quarantine_flags'
  }
};

/**
 * Returns like router.
 *
 * @returns {Object}
 */
export function like() {
  return createCRUD('action', 'like', Router(), likeMap, getSchemaDefinition(swagger, 'Like'));
}

/**
 * Returns follow router.
 *
 * @returns {Object}
 */
export function follow() {
  return createCRUD('action', 'follow', Router(), followMap, getSchemaDefinition(swagger, 'Follow'));
}

/**
 * Returns Flag router.
 *
 * @returns {Object}
 */
export function flag() {
  return createCRUD('action', 'flag', Router(), flagMap, getSchemaDefinition(swagger, 'Flag'));
}

/**
 * Returns quarantine router.
 *
 * @returns {Object}
 */
export function quarantine() {
  return createCRUD('action', 'quarantine', Router(), quarantineMap, getSchemaDefinition(swagger, 'Quarantine'));
}
