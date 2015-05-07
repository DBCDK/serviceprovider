'use strict';
let newRelicConfig = require('./newrelic.config');
const ENV = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'local';
const NAME = newRelicConfig.palle.app_name  + ' - ' + ENV;
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: NAME,
  /**
   * Your New Relic license key.
   */
  license_key: newRelicConfig.license_key,
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'trace'
  }
};