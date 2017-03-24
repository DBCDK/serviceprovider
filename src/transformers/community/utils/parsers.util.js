import {validate} from 'jsonschema';
import mapper from 'object-mapper';
import {invert} from 'lodash';
import {generateSwagger} from '../../../swaggerFromSpec';

const swagger = generateSwagger();

function utilFactory(map, defaultValues, schema) {
  return {
    mapperToElvis: (data) => mapper(data, map),
    mapperFromElvis: (data) => data && Object.assign({}, defaultValues, mapper(data, invert(map))) || {},
    validate: (data) => validate(data, schema).errors,
    map,
    invertedMap: invert(map)
  };
}

export const ProfileUtils = () => {
  const schema = swagger.definitions.Profile;

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
  const schema = swagger.definitions.Group;

  const defaultValues = {
    title: '',
    body: '',
    created_epoch: 0,
    modified_epoch: 0,
    id: 0,
    owner_id: 0
  };

  const map = {
    id: 'id',
    modified_epoch: 'modified_epoch',
    created_epoch: 'created_epoch',
    modified_by: 'modified_by',
    title: 'title',
    body: 'contents',
    owner_id: 'owner_id'
  };

  return utilFactory(map, defaultValues, schema);
};

export const PostUtils = () => {
  const schema = swagger.definitions.Post;

  const defaultValues = {
    title: '',
    body: '',
    created_epoch: 0,
    modified_epoch: 0,
    id: 0,
    group_id: 0,
    owner_id: 0
  };

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

  return utilFactory(map, defaultValues, schema);
};

export const CommentUtils = () => {
  const schema = swagger.definitions.Post;

  const defaultValues = {
    title: '',
    body: '',
    created_epoch: 0,
    modified_epoch: 0,
    id: 0,
    post_id: 0,
    owner_id: 0
  };

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
  const status = error.status || 500;
  delete error.status;
  return {
    status,
    error,
    data: []
  };
}