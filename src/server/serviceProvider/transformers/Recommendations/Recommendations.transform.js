'use strict';

const RecommendationsTransform = {
  event() {
    return 'getRecommendations';
  },

  requestTransform(event, params, connection) {
    let call;
    if (params.isFrontPage && !connection.request.session.passport) {
      const filter = connection.libdata.config.provider.services.recommend.filters || ['rec.collectionIdentifier:' + (connection.libdata.libraryId || '716500') + '-katalog'];
      const metaParams = {
        filter: filter,
        profile: 'pop'
      };
      call = this.callServiceClient('recommendmeta', 'getRecommendations', metaParams);
    }
    else {
      params.libdata = connection.libdata;
      call = this.callServiceClient('recommend', 'getRecommendations', params);
    }

    return call;
  },

  responseTransform(data) {
    return this.extractWorkInformation(data.result);
  },

  extractWorkInformation(result) {
    return result.map((element) => {
      return {
        identifiers: [element[0]],
        title: element[1].title,
        creator: element[1].creator,
        workType: 'book' // @todo Hardcoded for now, change to real worktype
      };
    });
  }
};

export default RecommendationsTransform;
