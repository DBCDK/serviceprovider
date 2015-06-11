"use strict";
/**
 * @file
 * This file contains utility methods for converting between
 * 1. url query strings
 * 2. internal query objects
 * 3. CQL (only to CQL, there is no methods for converting CQL back)
 */

import _ from 'lodash';


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
  return query.reduce((group, element)=>{
    let {type, value} = element;
    group[type] = group[type] || [];
    group[type].push(value);
    return group;
  }, {});
}


function splitGroupToUrlQuery(group, key) {
  let values = group.join('|');
  return `${key}=${values}`;
}

function splitGroupToCQL(group, key) {
  console.log(group);
  let values = group.join(' and ');

  // If key is text the query if from the default index and no index should be specified. Else the key defines the
  // the index
  return (key === 'text' ) && `(${values})` || `${key}=(${values})`;
}

function stateToQuery(query) {
  let groups = groupByType(query);
  return _.map(groups, splitGroupToUrlQuery).join('&');
}

function parseQueryStringObject (queryStringObject) {
  return _.flatten(_.map(queryStringObject, parseQueryStringElement));
}

function objectToCql(query) {
  let groups = groupByType(query);
  return _.map(groups, splitGroupToCQL).join(' and ');
}

export default {
  queryToState: parseQueryStringObject,
  stateToQuery,
  queryToCql: objectToCql,
  stringToObject,
  objectToString,
  objectToCql

}