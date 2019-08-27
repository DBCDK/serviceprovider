import socketClusterServer from 'socketcluster-server';
import {enableWSTransport} from './provider';
import {apiPath} from './utils/config';

/**
 * Start a websocket server.
 *
 * @export
 * @param {*} server
 */
export function startServer(server) {
  const scServer = socketClusterServer.attach(server, {
    path: `${apiPath}socketcluster/`
  });
  scServer.on('connection', function(socket) {
    enableWSTransport(socket);
  });
}
