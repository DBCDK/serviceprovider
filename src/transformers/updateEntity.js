/**
 * @file: Update entity
 */

import EntityRequest, {communityRequest} from './community/utils/EntityRequest';

export default function updateEntityTransform(req, context) {
  const entityRequest = new EntityRequest(
    req._meta.type,
    req._meta.elvisType,
    communityRequest.bind(null, context),
    req._meta.schemaMap,
    req._meta.schema
  );

  const modifiedById = 1; // @TODO: Get current user id from context?
  const params = {};
  Object.keys(req._meta.schemaMap).forEach(scemaKey => {
    if (req[scemaKey]) {
      params[scemaKey] = req[scemaKey];
    }
  });
  delete params.id;

  return entityRequest.put(req.id, modifiedById, params);
}
