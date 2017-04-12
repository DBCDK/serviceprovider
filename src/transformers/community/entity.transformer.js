/**
 * @file: Transformer for entityrequests, allows for autotests.
 */

import EntityRequest, {communityRequest} from './utils/EntityRequest';

export default function entityTransformer(req, context) {
  const entityRequest = new EntityRequest(
    req.etParams.type,
    req.etParams.elvisType,
    communityRequest.bind(null, context),
    req.etParams.schemaMap,
    req.etParams.schema
  );

  let returnPromise;
  switch (req.type) {
    case 'list': {
      returnPromise = entityRequest.getList();
      break;
    }

    case 'item': {
      returnPromise = entityRequest.get(req.params.id);
      break;
    }

    case 'create': {
      returnPromise = entityRequest.post(req.body);
      break;
    }

    case 'update': {
      returnPromise = entityRequest.put(req.params.id, req.body);
      break;
    }

    case 'delete': {
      returnPromise = entityRequest.getList(req.query);
      break;
    }

    default: {
      returnPromise = Promise.reject('Unknown crudType!');
    }
  }

  return returnPromise;
}
