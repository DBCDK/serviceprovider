
'use strict';
import genericTransformer from '../genericTransformer.js';
import recommendClient from '../services/Recommendations/Recommendation.client.js';
import lodash from 'lodash';

function requestTransform(request, context) {
  const filter = context.libdata.config.provider.services.recommend.filters || ['rec.collectionIdentifier:' + (context.libdata.libraryId || '716500') + '-katalog'];
  let result;
  if (request.isFrontPage && !context.request.session.passport) {
    const metaParams = {
      filter: filter,
      profile: 'pop'
    };
    result = metaParams;
  } else { // eslint-disable-line brace-style
    request.libdata = context.libdata;
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
  context.endpoint = context.libdata.config.provider.services.recommend.endpoint;
  let rec_client = recommendClient(context);

  return function (request, context_local) {
    let params = context_local;
    lodash.extend(params, request);
    return rec_client.getRecommendations(params);
  };
}

export default function recommendTransformer() {
  return genericTransformer(requestTransform, responseTransform, recommenderFunc);
}

