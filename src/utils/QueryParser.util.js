'use strict';

/**
 * @file
 * This file contains utility methods for converting between
 * 1. url query strings
 *    [
 *      {text : 'first|second'},
 *      {term.type: 'book'}
 *    ]
 * 2. internal query objects
 *    [
 *      {value: 'first', type: 'text', index},
 *      {value: 'second', type: 'text', index},
 *      {value: 'book', type: 'term.type', index}
 *    ]
 * 3. CQL (only to CQL, there is no methods for converting CQL back)
 *    (first and second) and term.type=(book)
 */

import _ from 'lodash';

/**
 * group query objects by type
 *
 * @param query {Array}
 *    An array of internal query objects
 * @returns {object}
 *    An object the indexes as keys
 */
function groupByType(query) {
  return query.reduce((group, element)=> {
    let {type, value} = element;
    group[type] = group[type] || [];
    group[type].push(value);
    return group;
  }, {});
}

/**
 * Joins a group of values by | and relate it to an index
 *
 * (Internal method)
 *
 * @param group
 * @param key
 * @returns {*}
 */
function splitGroupToUrlQuery(group, key) {
  let values = group.join('|');
  return `${key}=${values}`;
}

/**
 * Converts a group of query objects to a CQL string
 *
 * (Internal method)
 *
 * @param group
 *  A group of search values within an index
 * @param key
 *  the index of the group text is the default index
 * @returns {string}
 *  valid CQL string
 */
function splitGroupToCQL(group, key) {
  let values = group.map(element => {
    return element.indexOf(' ') >= 0 && `"${element}"` || element;
  }).join(' and ');


  // If key is text the query if from the default index and no index should be specified. Else the key defines the
  // the index
  return (key === 'text') && `(${values})` || `${key}=(${values})`;
}


function queryStringToObject(queryString) {
  if (queryString.indexOf('?') === 0) {
    return queryString.subString(1).split('&').map();
  }
}
/**
 * Converts a query string object to a internal query object
 *
 * (Internal method)
 *
 * @param values {string}
 *    Values are separated with a |
 * @param type {string}
 *    For default index type=text else type is the name of the index
 * @returns {Array}
 *    An array of internal query objects
 */
function parseQueryStringElement(values, type) {
  return values.split('|').map((value, i)=> {
    return {
      value: decodeURIComponent(value),
      type,
      index: type + value + i
    };
  });
}

/**
 * Converts a query string object to a internal query object
 *
 * @param QueryStringObject {Array}
 *    @see type one in the file description
 * @returns {Array}
 *    An array of internal query objects
 */
export function stringToObject(queryStringObject) {
  return _.flatten(_.map(queryStringObject, parseQueryStringElement));
}

/**
 * Converts internal query objects to a query string
 *
 * @param query {Array}
 *    Elements in the array are objects with min. a value and type
 * @returns {string}
 *    Query formatted string
 */
export function objectToString(query) {
  let groups = groupByType(query);
  return _.map(groups, splitGroupToUrlQuery).join('&');
}

/**
 * Converts an internal query object to valid CQL
 *
 * @param query {Array}
 *    Elements in the array are objects with min. a value and type
 * @returns {String}
 *    CQL formatted string
 */
export function objectToCql(query) {
  let groups = groupByType(query);
  return _.map(groups, splitGroupToCQL).join(' and ');
}


export default {
  stringToObject,
  queryStringToObject,
  objectToString,
  objectToCql
};
