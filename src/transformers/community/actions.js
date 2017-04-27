import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {getSpecification, getSchemaDefinition} from '../../swaggerFromSpec';
const swagger = getSpecification();

/**
 * Returns like router.
 *
 * @returns {Object}
 */
export function like() {

  const remap = {
    id: 'id',
    reference: 'attributes.reference',
    profile_id: 'owner_id'
  };

  return createCRUD('action', 'like', Router(), remap, getSchemaDefinition(swagger, 'Like'));
}

/**
 * Returns follow router.
 *
 * @returns {Object}
 */
export function follow() {

  const remap = {
    id: 'id',
    reference: 'attributes.reference',
    profile_id: 'owner_id'
  };

  return createCRUD('action', 'follow', Router(), remap, getSchemaDefinition(swagger, 'Follow'));
}

/**
 * Returns Flag router.
 *
 * @returns {Object}
 */
export function flag() {

  const remap = {
    id: 'id',
    reference: 'attributes.reference',
    reason: 'attributes.reason',
    profile_id: 'owner_id'
  };

  return createCRUD('action', 'flag', Router(), remap, getSchemaDefinition(swagger, 'Flag'));
}
