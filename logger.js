'use strict';

let winston = require('winston');

let logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({json: true})
  ]
});

if (process.env.NODE_ENV === 'production') { // eslint-disable-line no-process-env
  require('winston-syslog').Syslog; // eslint-disable-line no-unused-expressions
  winston.add(winston.transports.Syslog, {
    protocol: 'udp',
    path: '/var/log/syslog',
    app_name: 'palles_gavebod'
  });
  winston.setLevels(winston.config.syslog.levels);
}

module.exports = logger;
