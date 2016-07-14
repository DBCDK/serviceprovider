

import searchTransformer from './opensearchSearch';
import {makeTypeID} from '../requestTypeIdentifier';

let typeId = makeTypeID();

export default (params, context) => {
  let search = searchTransformer(params, context);
  let fields = params.fields || [];

  // find out which fields are necessary to get from the work endpoint
  let workFields = [];
  fields.forEach(field => {
    let type = typeId.getType(field);
    if (type === 'moreinfo' // moreinfo is a separate service, which we can get through work
        || type === 'relations') { // relations in opensearch-search is based on collections, and we want it for the manifests
      workFields.push(field);
    }
  });

  if (workFields.length === 0) {
    // search result is sufficient
    return search;
  }

  return search.then(results => {
    // fail if search failed
    if (results.statusCode !== 200) {
      return results;
    }

    // call work-endpoint with pids from search result, and desired fields
    let workRequest = {pids: results.data.map(o => o.pid[0]), fields: workFields};
    return context.call('work', workRequest) .then(workResult => {
      // combine the objects from search and work endpoints.
      let result = [];
      for (let i = 0; i < results.data.length; ++i) {
        result[i] = Object.assign(results.data[i], workResult.data[i]);
      }
      return {statusCode: 200, data: result};
    });
  });
};
