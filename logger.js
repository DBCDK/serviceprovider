'use strict';

let winston = require('winston');

let logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({json: true})
  ]
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') { // eslint-disable-line no-process-env
  logger.log('info', 'adding syslog');
  require('winston-syslog').Syslog; // eslint-disable-line no-unused-expressions
  logger.add(winston.transports.Syslog, {
    protocol: 'udp6',
    path: '/var/log/syslog',
    app_name: 'palles_gavebod'
  });
  logger.setLevels(winston.config.syslog.levels);
}

module.exports = logger;
