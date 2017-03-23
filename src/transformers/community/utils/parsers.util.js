import {validate} from 'jsonschema';
import mapper from 'object-mapper';
import {invert} from 'lodash';
import {generateSwagger} from '../../../swaggerFromSpec';

function utilFactory(map, defaultValues, schema) {
  return {
    mapperToElvis: (data) => mapper(data, map),
    mapperFromElvis: (data) => Object.assign({}, defaultValues, mapper(data, invert(map))),
    validate: (data) => validate(data, schema).errors
  };
}

export const ProfileUtils = () => {
  const schema = generateSwagger().definitions.Profile;

  const defaultValues = {
    username: '',
    displayName: '',
    description: '',
    email: '',
    phone: '',
    modified_epoch: '',
    created_epoch: '',
    birthday: '',
    fullName: '',
    id: 0
  };

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

  return utilFactory(map, defaultValues, schema);
};

export const GroupUtils = () => {
  const schema = generateSwagger().definitions.Profile;

  const defaultValues = {
    username: '',
    displayName: '',
    description: '',
    email: '',
    phone: '',
    modified_epoch: '',
    created_epoch: '',
    birthday: '',
    fullName: '',
    id: 0
  };

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

  return utilFactory(map, defaultValues, schema);
};

/**
 * Parse an error from Elvis.
 *
 * @param errors
 * @returns {{status: *, error: *, data: Array}}
 */
export function parseErrors(errors) {
  const error = Array.isArray(errors) && errors[0] || errors;
  const status = error.status;
  delete error.status;
  return {
    status,
    error,
    data: []
  };
}
