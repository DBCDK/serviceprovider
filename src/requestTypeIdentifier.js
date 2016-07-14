
/**
* @file
* requestType indentifier
*
* This file contains functions designed to find out which endpoints
* needs to be called, based on the provided filter fields.
*
* Example of usage:
*
*   let typeID = makeTypeID();
*
*   let retval = typeID.getType('isAnalysisOf');
*   let isval = typeID.isType('isAnalysisOf', 'relations');
*
*/
import fs from 'fs';
import {die, log} from './utils.js';

const workContext = JSON.parse(fs.readFileSync(__dirname + '/../doc/work-context.jsonld', 'utf8'));
const reverseContext = makeReverseContext();

/**
 * Returns field based on id and type
 * @param {string} tagName the name of the tag of requested field
 * @param {string} type the type of requested field
 * @returns {string} fieldname
 *
 * @api public
 */
function getField(tagName, type) {
  let xmlName = tagName;
  if (type) {
    xmlName = tagName + type.split(':')[1];
  }
  let jsonName = reverseContext[xmlName.toLowerCase()];
  if (!jsonName) {
    log.warn('invalid id/type, trying type=oth', {tag: tagName, type: type});
    xmlName = tagName + 'oth';
    jsonName = reverseContext[xmlName.toLowerCase()];
  }
  return jsonName;
}

/**
* requestType enum. Only these request types are supported.
*/
export let requestType = {
  RELATIONS: 'relations',
  MOREINFO: 'moreinfo',
  BRIEFDISPLAY: 'briefdisplay',
  COLLECTION: 'collection',
  DKABM: 'dkabm'
};

/**
* private function. validates type
*/
function isRequestType(type) {
  for (var key in requestType) {
    if (type === requestType[key]) {
      return true;
    }
  }
  return false;
}

/**
* TypeID class
*
* provides two functions:
*   getType: returns type for input field
*   isType: performs type test.
*
*/
export function TypeID() {
  this.namespaceMap = {
    dc: requestType.DKABM,
    dkdcplus: requestType.DKABM,
    dcterms: requestType.DKABM,
    ac: requestType.DKABM,
    bd: requestType.BRIEFDISPLAY,
    os: requestType.COLLECTION,
    mi: requestType.MOREINFO,
    dbcaddi: requestType.RELATIONS,
    dbcbib: requestType.RELATIONS
  };

  /**
   * Gets type of field
   * @param {string} field returns endpoint type for field
   * @throws {err} if fieldtype is unknown
   *
   * @api public
   */
  this.getType = function(field) {

    let val = workContext[field];
    if (typeof val === 'undefined' || typeof val === 'string') {
      die('key \'' + field + '\' is unknown');
    }

    let namespace = val['@id'].split(':')[0];

    if (typeof this.namespaceMap[namespace] === 'undefined') {
      die('unknown namespace \'' + namespace + '\'. Known namespaces are [' + Object.keys(this.namespaceMap) + ']');
    }
    return this.namespaceMap[namespace];
  };

  /**
   * Tests field type
   * @param {string} field fieldname to test
   * @param {string} type to test against
   * @throws {err} if field or type is unknown
   *
   * @api public
   */
  this.isType = function(field, type) {
    if (!isRequestType(type)) {
      die('type \'' + type + '\' is not a valid requestType. valid requestTypes are: [' + Object.keys(requestType).map(function(k) {
        return requestType[k];
      }) + ']');
    }

    return this.getType(field) === type;
  };
  this.getField = getField;
}

/**
 * Creates and returns TypeID based on work-context file.
 *
 * @api public
 */
export function makeTypeID() {
  return new TypeID();
}

/**
 * Create a lookup table for finding the JSON-name of a tag/type.
 */
function makeReverseContext() {
  let result = {};

  for (let key in workContext) { // eslint-disable-line guard-for-in
    let elem = workContext[key];
    let id = elem['@id'];
    let type = elem['@type'];
    if (id) {
      if (type) {
        id += type.split(':')[1];
      }
      id = id.toLowerCase();
      result[id] = key;
    }
  }
  return result;
}

/**
 * Map a badgerfish xml tag to its name in the json object.
 * @param {object} o The xml element as badgerfish
 * @param {string} defaultPrefix The default prefix for the namespace for elements in the xml.
 */
export function workToJSON(o, defaultPrefix) {
  var result = {};
  for (let key in o) {  // eslint-disable-line guard-for-in
    if (key === '@') {
      continue;
    }
    let entries = o[key];
    if (!Array.isArray(entries)) {
      entries = [entries];
    }
    entries.forEach(entry => { // eslint-disable-line no-loop-func
      let tagName = (entry['@'] || defaultPrefix) + ':' + key;
      let type = entry['@type'] ? entry['@type'].$ : undefined; // eslint-disable-line no-undefined
      let jsonName = getField(tagName, type);
      if (!jsonName) {
        log.error('invalid id/type', {object: entry});
      }
      else {
        result[jsonName] = result[jsonName] || [];
        result[jsonName].push(entry.$);
      }
    });
  }
  return result;
}
