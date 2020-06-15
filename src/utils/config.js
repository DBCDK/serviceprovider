/**
 * @file
 * Global configurations
 */

/* eslint-disable no-process-env */

import {version} from '../../package.json';
import {log} from '../utils';

const requiredEnvVars = ['SMAUG'];

const missingEnvVars = requiredEnvVars.filter(
  envVar => typeof process.env[envVar] === 'undefined'
);

if (missingEnvVars.length > 0) {
  log.error('Missing ENV VARS: ' + missingEnvVars);
  process.exit(1);
}

export const apiPath = '/v' + parseInt(version, 10) + '/';
export const port = process.env.PORT || 8080;
export const smaug = process.env.SMAUG || null;
export const appId = 'serviceprovider' + apiPath;
