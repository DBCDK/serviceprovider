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
  _.each(state, (element)=>{
    query[element.type] = query[element.type] || [];
    query[element.type].push(element.value);
  });
  return _.map(query, (element, key) => key + "=" + element.join('|')).join('&');
}

export default {
  queryToState: parseQueryStringObject,
  stateToQuery

}