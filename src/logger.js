'use strict';

let winston = require('winston');
let os = require('os');

let logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(
      {
        json: true,
        timestamp: true,
        level: 'emerg',
        colorize: true,
        prettyPrint: true
      }
    )
  ]
});

logger.setLevels(winston.config.syslog.levels);

if (process.env.NODE_ENV === 'production') { // eslint-disable-line
  logger.log('info', 'adding syslog');
  require('winston-syslog').Syslog; // eslint-disable-line no-unused-expressions

  logger.add(winston.transports.Syslog, {
    protocol: 'udp4',
    localhost: os.hostname(),
    app_name: 'pallesgavebod',
    json: true,
    timestamp: true,
    level: 'emerg'
  });
}

module.exports = logger;


/*

 app.use(expressWinston.logger({
 transports: [
 new winston.transports.Console({
 json: true,
 colorize: true
 })
 ]
 }));

 app.use(expressWinston.errorLogger({
 transports: [
 new winston.transports.Console({
 json: true,
 colorize: true
 })
 ]
 }));

 */
