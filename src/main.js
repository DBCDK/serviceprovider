/**
 * @file
 * Create/start socketcluster.
 *
 */

// initialize babel, so all JSX and ES6 is transpiled
require('babel-register');

const http = require('http');
var log = require('./utils').log;
const config = require('./utils/config');

const server = http.createServer();
require('./app').startServer(server);
require('./socketCluster').startServer(server);

server.listen(config.port, () => {
  log.info('started', {
    event: 'started',
    port: config.port,
    versions: process.versions,
    smaug: config.smaug
  });
});
