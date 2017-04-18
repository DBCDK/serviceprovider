/**
 * @file: Create entity
 */

import EntityRequest, {communityRequest} from './community/utils/EntityRequest';

export default function createEntityTransform(req, context) {
  const entityRequest = new EntityRequest(
    req._meta.type,
    req._meta.elvisType,
    communityRequest.bind(null, context),
    req._meta.schemaMap,
    req._meta.schema
  );

  const params = {};
  Object.keys(req._meta.schemaMap).forEach(schemaKey => {
    if (req[schemaKey]) {
      params[schemaKey] = req[schemaKey];
    }
  });
  delete params.id;

  return entityRequest.post(params);
}
