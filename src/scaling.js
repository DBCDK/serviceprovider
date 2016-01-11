'use strict';

import {SocketCluster} from 'socketcluster';
import path from 'path';

new SocketCluster({ // eslint-disable-line no-new
  workers: Number(process.env.NODE_WEB_WORKERS) || 1, // eslint-disable-line no-process-env
  brokers: Number(process.env.NODE_WEB_BROKERS) || 1, // eslint-disable-line no-process-env
  port: Number(process.env.PORT) || 8080, // eslint-disable-line no-process-env
  appName: process.env.NEW_RELIC_APP_NAME || 'app_name', // eslint-disable-line no-process-env
  initController: path.join(__dirname, 'init.js'),
  workerController: path.join(__dirname, 'app.js'),
  rebootWorkerOnCrash: process.env.AUTO_REBOOT || true // eslint-disable-line no-process-env
});
