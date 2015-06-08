"use strict";
import _ from 'lodash';

function parseQueryStringObject (queryStringObject) {
  return _.flatten(_.map(queryStringObject, parseQueryStringElement));
}

function parseQueryStringElement(values, key) {
  return values.split('|').map((value, i)=> {
    return {
      value,
      type: key,
      index: key + value + i,
      cql: key + '=' + value
    }
  })
}

function stateToQuery(state) {
  let query = {}
  state.each((element)=>{
    query[element.key] = query[element.key] || [];
    query[element.key].push(value);
  });
  return query.map((element) => element.join('|')).join('&');
}

export default {
  queryToState: parseQueryStringObject,
  stateToQuery

}