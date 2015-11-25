'use strict';

import _ from 'lodash';

/**
 * Creates a new query object with a value and type key
 *
 * @param stringElements
 * @returns {Array}
 */
function addElementsFromString(stringElements) {
  const newElementValues = stringElements.split(' ');

  return newElementValues.map((value) => {
    return {
      value,
      type: 'text'
    };
  });
}

/**
 * Returns the index of a phrase in a string. If no match return null
 *
 * @param string
 * @param phrase
 * @returns {Array|{index: number, input: string}|number}
 */
function indexOfPhraseInString(string, phrase) {
  let req = new RegExp('(^|[^\\w])' + phrase + '($|[^\\w])', 'g');
  let match = req.exec(string);

  return match && string.indexOf(phrase);
}

/**
 * Helper function for the reduce call in updateQueryFromString
 *
 * @param previous
 * @param element
 * @returns {{string: *, query: *}}
 */
function testElementAgainstString(previous, element) {
  let {string, query} = previous;
  let indexValue = indexOfPhraseInString(string, element.value);
  if (indexValue > 0) {
    // the query element matches a part of the string but not from the beginning
    let newElementValues = string.substring(0, indexValue).trim();
    let newElements = addElementsFromString(newElementValues);
    query.push(newElements);
    string = string.substring(indexValue, string.length).trim();
  }
  if (indexValue > 0 || indexValue === 0) {
    // element was matched, remove element.value from string and add element to query
    string = string.substring(element.value.length, string.length).trim();
    query.push(element);
  }

  return {string, query};
}
/**
 * Takes a string and matches is up against an array of query elements
 * Unmatched words in the string is added to the query and unmatched elements in the query array
 * is removed
 *
 * @param string
 * @param query array of objects with a value and type key as a minimum
 * @returns {Array}
 */
export function updateQueryFromString(string, query) {
  // initial state for the reduce function
  let initialState = {
    string,
    query: []
  };
  // Reduce the query array to a new list of queries
  let state = query.reduce(testElementAgainstString, initialState);
  // Add the remaining string to the query array
  if (state.string.length > 0) {
    let newElements = addElementsFromString(state.string);
    state.query.push(newElements);
  }

  return _.flatten(state.query);
}
