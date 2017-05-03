export const groupMap = {
  body: 'contents',
  profile_id: 'owner_id',
  media: 'attributes.media'
};

export const postMap = {
  body: 'contents',
  profile_id: 'owner_id',
  group_id: 'entity_ref',
  media: 'attributes.media'
};

export const commentMap = {
  body: 'contents',
  profile_id: 'owner_id',
  post_id: 'entity_ref',
  media: 'attributes.media'
};

export const reviewMap = {
  body: 'contents',
  profile_id: 'owner_id',
  reference: 'entity_ref',
  rating: 'attributes.rating',
  media: 'attributes.media'
};

export const likeMap = {
  id: 'id',
  reference: 'attributes.reference',
  profile_id: 'owner_id'
};

export const flagMap = {
  id: 'id',
  reference: 'attributes.reference',
  reason: 'attributes.reason',
  profile_id: 'owner_id'
};

export const followMap = {
  id: 'id',
  reference: 'attributes.reference',
  profile_id: 'owner_id'
};

export const profile = {
  username: 'name',
  email: 'attributes.email',
  displayName: 'attributes.displayName',
  description: 'attributes.description',
  phone: 'attributes.phone',
  birthday: 'attributes.birthday',
  fullName: 'attributes.fullName'
};