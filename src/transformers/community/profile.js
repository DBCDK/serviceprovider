import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {getSpecification} from '../../swaggerFromSpec';
const swagger = getSpecification();

export const schemas = {
  profile: {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    deleted_epoch: 'deleted_epoch',
    username: 'name',
    modified_by: 'modified_by',
    email: 'attributes.email',
    displayName: 'attributes.displayName',
    description: 'attributes.description',
    phone: 'attributes.phone',
    birthday: 'attributes.birthday',
    fullName: 'attributes.fullName'
  }
};

/**
 * Returns group router.
 *
 * @returns {Object}
 */
export function profile() {
  const map = schemas.profile;
  return createCRUD('profile', null, Router(), map, swagger.definitions.Profile);
}
