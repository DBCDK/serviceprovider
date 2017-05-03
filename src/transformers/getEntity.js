/**
 * @file: Get entity
 */

import EntityRequest, {communityRequest} from './community/utils/EntityRequest';

export default function getEntityTransform(req, context) {
  const entityRequest = new EntityRequest(
    req._meta.type,
    req._meta.elvisType,
    communityRequest.bind(null, context),
    req._meta.schemaMap,
    req._meta.schema
  );

  return entityRequest.get(req.id, req.include);
}
