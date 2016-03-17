'use strict';
/**
 * @file
 * Common functions for service provider
 */
const fs = require('fs');

/**
* Die function. Writes to console and throws error
*/
function die(str) {
  console.trace('ERROR: ' + str); // eslint-disable-line
  throw (str);
}

/**
* Returns the name of the given function
*/
function functionName(fun) {
  let ret = fun.toString();
  ret = ret.substr('function '.length);
  ret = ret.substr(0, ret.indexOf('('));
  return ret;
}

/**
 * Logs object to console as JSON.
 * The function adds a timestamp to the json object (key=logTimestamp)
 */
function logJSON(object) {
  object.logTimestamp = Math.floor(new Date() / 1000);
  console.log(JSON.stringify(object)); // eslint-disable-line
}

/**
* return true if the given path is an existing directory, false
* otherwise.
*/
function isDir(path) {
  try {
    let stats = fs.lstatSync(path);
    if (stats.isDirectory()) {
      return true;
    }
  }
    catch (e) {} // eslint-disable-line
  return false;
}

module.exports.die = die;
module.exports.functionName = functionName;
module.exports.logJSON = logJSON;
module.exports.isDir = isDir;
