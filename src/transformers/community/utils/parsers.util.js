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
  delete error.meta;
  delete error.stack;
  return {
    status,
    error,
    data: []
  }
}

/**
 * Set profile values.
 *
 * @param profile
 * @returns {*}
 */
export function mapProfile(profile) {
  const defaultProfile = {
    username: '',
    displayName: '',
    description: '',
    email: '',
    phone: '',
    created: '',
    lastUpdated: '',
    birthday: '',
    fullName: '',
    id: 0
  };

  return Object.assign({}, defaultProfile, profile.attributes, {id: profile.id, username: profile.name});
}

export function mapToElvisProfile(data) {
  const profile = {
    name: data.username,
    attributes: {
      displayName: '',
      description: '',
      email: '',
      phone: '',
      created: '',
      lastUpdated: '',
      birthday: '',
      fullName: ''
    }
  };

  delete data.username;

  return Object.assign({}, profile, {attributes: data});
}