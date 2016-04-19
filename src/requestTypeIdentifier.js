'use strict';
/**
* @file
* requestType indentifier
*
* This file contains functions designed to find out which endpoints
* needs to be called, based on the provided filter fields.
*
* Example of usage:
*
*   let typeID = makeTypeID('doc/work-context.jsonld');
*
*   let retval = typeID.getType('isAnalysisOf');
*   let isval = typeID.isType('isAnalysisOf', 'relations');
*
*/
import fs from 'fs';
import {findKey} from 'lodash';
import {die} from './utils.js';


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
* @param workContext field definitions
*/
export function TypeID(workContext) {
  this.workContext = workContext;
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

    let val = this.workContext[field];
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

    if (this.getType(field) === type) {
      return true;
    }
    return false;
  };

  /**
   * Returns field based on id and type
   * @param {string} id the id of requested field
   * @param {string} type the type of requested field
   * @returns {string} fieldname
   *
   * @api public
   */
  this.getField = function(id, type) {
    let obj = {'@id': id};
    if (typeof type !== 'undefined') {
      obj['@type'] = type;
    }
    return findKey(workContext, obj);
  };
}


/**
 * Creates and returns TypeID based on work-context file.
 *
 * @param {string} filePath path to work-context file
 * @api public
 */
export function makeTypeID(filePath) {
  return new TypeID(JSON.parse(fs.readFileSync(filePath, 'utf8')));
}
