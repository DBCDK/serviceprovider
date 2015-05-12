'use strict';

let winston = require('winston');
require('winston-syslog').Syslog; // eslint-disable-line no-unused-expressions

let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({json: true})
  ]
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) { // eslint-disable-line
  logger.log('info', 'adding syslog');
  require('winston-syslog').Syslog; // eslint-disable-line no-unused-expressions

  logger.add(winston.transports.Syslog, {
    protocol: 'udp4',
    app_name: 'palles_gavebod'
  });
  logger.setLevels(winston.config.syslog.levels);
}

logger.log('info', 'HEST');
logger.info('hest');

module.exports = logger;
