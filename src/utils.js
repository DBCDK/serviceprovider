const fs = require('fs');
const {hostname} = require('os');
const process = require('process');
const {version} = require('../package.json');

/**
 * Die function. Writes to console and throws error
 */
function die(str) {
  console.trace('ERROR: ' + str); // eslint-disable-line
  throw str;
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
 * @returns current log level
 */

function getCurrentLogLevel() {
  return process.env.LOG_LEVEL || 'INFO'; // eslint-disable-line no-process-env
}

/**
 * Convert a log level name to a corresponding numerical value
 *
 * @param logLevel log level to convert
 * @returns numerical log level
 */

function getNumericalLogLevel(logLevel) {
  var logLevels = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    WARNING: 2,
    INFO: 3,
    DEBUG: 4,
    TRACE: 5
  };

  return logLevels[logLevel.toUpperCase()];
}

/**
 * Log as JSON to stdout
 *
 * @param level log level
 * @param msg message to log
 * @param args map of additional key/values to log
 */
function doLog(level, msg, args) {
  const currentNumericalLogLevel = getNumericalLogLevel(getCurrentLogLevel());
  const targetNumericalLogLevel = getNumericalLogLevel(level);
  if (currentNumericalLogLevel < targetNumericalLogLevel) {
    return; // level low, do nothing
  }

  var blob = {
    '@timestamp': new Date().toISOString(),
    '@version': 1,
    app: 'serviceprovider',
    version: version,
    level: level.toUpperCase(),
    host: hostname(),
    pid: process.pid
  };

  if (msg) {
    blob.msg = msg;
  }

  console.log(JSON.stringify(Object.assign(blob, args))); //NOSONAR
}

/**
 * return true if the given path is an existing directory, false
 * otherwise.
 */
function isDir(path) {
  try {
    const stats = fs.lstatSync(path);
    if (stats.isDirectory()) {
      return true;
    }
  } catch (e) {
    doLog('warn', 'Failed checking for directory');
  }
  return false;
}

const log = {
  log: doLog,
  info: (msg, args) => doLog('info', msg, args),
  warn: (msg, args) => doLog('warn', msg, args),
  error: (msg, args) => doLog('error', msg, args),
  debug: (msg, args) => doLog('debug', msg, args),
  trace: (msg, args) => doLog('trace', msg, args)
};

/**
 * Timingdecorator.
 * returns new function that logs time usage of function.
 *
 */
function timingDecorator(f) {
  return function() {
    const start = Date.now();
    const r = f.apply(this, arguments);
    log.debug('timing', {
      timing: {function: functionName(f), time: Date.now() - start}
    });
    return r;
  };
}

module.exports = {
  die,
  functionName,
  getCurrentLogLevel,
  isDir,
  log,
  timingDecorator
};
