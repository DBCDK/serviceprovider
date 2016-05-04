
'use strict';
import genericTransformer from '../genericTransformer.js';
import recommendClient from '../services/Recommendations/Recommendation.client.js';
import lodash from 'lodash';

function requestTransform(request, context) {
  const filter = context.data.libdata.config.provider.services.recommend.filters || ['rec.collectionIdentifier:' + (context.data.libdata.libraryId || '716500') + '-katalog'];
  let result;
  if (request.isFrontPage) {
    const metaParams = {
      filter: filter,
      profile: 'pop'
    };
    result = metaParams;
  } else { // eslint-disable-line brace-style
    request.libdata = context.data.libdata;
    request.filter = filter;
    result = request;
  }
  return result;
}

function responseTransform(response, context) { // eslint-disable-line no-unused-vars
  let result = response.result;
  return result.map((element) => {
    return {
      identifiers: [element[0]],
      title: element[1].title,
      creator: element[1].creator,
      workType: 'book' // @todo Hardcoded for now, change to real worktype
    };
  });
}

function recommenderFunc(context) {
  let rec_client = recommendClient(context.data.recommend);

  return function (request, context_local) {
    let params = context_local;
    lodash.extend(params, request);
    return rec_client.getRecommendations(params);
  };
}

export default function recommendTransformer() {
  return genericTransformer(requestTransform, responseTransform, recommenderFunc);
}

