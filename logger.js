'use strict';

let winston = require('winston');

let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({json: true, timestamp: true, level: 'alert'})
  ]
});

logger.setLevels(winston.config.syslog.levels);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') { // eslint-disable-line
  logger.log('info', 'adding syslog');
  require('winston-syslog').Syslog; // eslint-disable-line no-unused-expressions

  logger.add(winston.transports.Syslog, {
    protocol: 'udp4',
    app_name: 'palles gavebod',
    json: true,
    timestamp: true,
    level: 'alert'
  });
}

module.exports = logger;
