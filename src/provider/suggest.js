'use strict';
/**
 * Suggest transformer.
 *
 * Wraps entitysuggest backends, and popsuggest backend.
 *
 *
 */
function validateParams(params) {
  if (!params.q) {
    throw ('missing q parameter');
  }
  if (!params.type) {
    throw ('missing type parameter');
  }
  if (typeof params.q !== 'string') {
    throw ('q parameter must be a string');
  }
  if (params.limit && isNaN(parseInt(params.limit, 10))) {
    throw ('limit parameter must be a number');
  }
}

let fMap = {creator: creatorSuggest,
            library: librarySuggest,
            subject: subjectSuggest,
            title: titleSuggest};


export default (params, context) => {

  try {
    validateParams(params);
  } catch (err) { // eslint-disable-line brace-style
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: err});
    });
  }

  if (!fMap[params.type]) {
    return new Promise(resolve => {
      return resolve({statusCode: 400,
                      error: `Unsupported suggestion type ${params.type}.` +
                      ` Supported types are: ${Object.keys(fMap)}`});
    });
  }

  if (params.limit) {
    params.limit = parseInt(params.limit, 10);
  }

  return fMap[params.type](params, context).then(result => {
    return result;
  });
};


function creatorSuggest(params, context) {
  let localParams = {query: params.q};
  if (params.limit) {
    localParams.n = params.limit;
  }
  return context.call('creatorsuggest', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.suggestions.map((obj) => {
        return {str: obj.suggestion};
      })};
    });
}


function librarySuggest(params, context) {
  let localParams = {query: params.q, lt: context.data.librarysuggest.librarytype};
  if (params.limit) {
    localParams.n = params.limit;
  }
  return context.call('librarysuggest', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.suggestions.map((obj) => {
        return {str: obj.suggestion};
      })};
    });
}


function subjectSuggest(params, context) {
  let localParams = {query: params.q, rs: 3};

  if (params.limit) {
    localParams.n = params.limit;
  }

  return context.call('subjectsuggest', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.suggestions.map((obj) => {
        return {str: obj.suggestion};
      })};
    });
}


function mapTitleKeys(obj) {
  let retObj = {str: obj['display.title'][0], id: obj.fedoraPid};
  if (obj.hasOwnProperty('display.creator')) {
    retObj.creator = obj['display.creator'][0];
  }
  if (obj.hasOwnProperty('display.workType')) {
    retObj.type = obj['display.workType'][0];
  }
  return retObj;
}


function titleSuggest(params, context) {
  let localParams = {query: '{!complexphrase inOrder=true}display.title:' + params.q + '*',
                     fields: 'display.title,fedoraPid,display.creator,display.workType',
                     filter: 'rec.collectionIdentifier:775100-katalog'};
  if (params.limit) {
    localParams.rows = params.limit;
  }
  return context.call('popsuggest', localParams)
    .then(body => {
      return {statusCode: 200, data: body.data.response.docs.map((obj) => {
        return mapTitleKeys(obj);
      })};
    });
}
