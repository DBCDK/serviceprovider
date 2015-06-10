"use strict";
import _ from 'lodash';

function parseQueryStringObject (queryStringObject) {
  return _.flatten(_.map(queryStringObject, parseQueryStringElement));
}

function parseQueryStringElement(values, type) {
  return values.split('|').map((value, i)=> {
    return {
      value,
      type,
      index: type + value + i,
      cql: `${type}=${value}`
    }
  })
}

function groupByType(query) {
  return _query.reduce((group, element)=>{
    let {type, value} = element;
    group[type] = group[type] || [];
    group[type].push(value);
    return group;
  }, {});
}

function stateToQuery(query) {
  let groups = groupByType(query);
  return _.map(groups, splitGroupToUrlQuery).join('&');
}

function splitGroupToUrlQuery(group, key) {
  let values = group.join('|');
  return `${key}=${values}`;
}

function splitGroupToCQL(group, key) {
  let values = group.split(' and ');

  // If key is text the query if from the default index and no index should be specified. Else the key defines the
  // the index
  return (key === 'text' ) && `(${values})` || `${key}=(${values})`;
}

function queryToCql(query) {
  let groups = groupByType(query);
  return _.map(groups, splitGroupToCQL).split(' and ');
}

export default {
  queryToState: parseQueryStringObject,
  stateToQuery,
  queryToCql

}