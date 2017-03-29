import {Router} from 'express';
import createCRUD from './utils/createCRUD';
import {generateSwagger} from '../../swaggerFromSpec';
const swagger = generateSwagger();

/**
 * Returns group router.
 *
 * @returns {Object}
 */
export function profile() {

  const map = {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    deleted_epoch: 'deleted_epoch',
    username: 'name',
    email: 'attributes.email',
    displayName: 'attributes.displayName',
    description: 'attributes.description',
    phone: 'attributes.phone',
    birthday: 'attributes.birthday',
    fullName: 'attributes.fullName'
  };

  return createCRUD('profile', null, Router(), map, swagger.definitions.Profile);
}
