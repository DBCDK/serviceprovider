/**
 * @file Contains mobilsøg specific middleware.
 */
'use strict';

import {has} from 'lodash';

function getKommuneConf(host, config, app) {
  let kommune = host.split('.')[0];
  kommune = has(config, kommune) ? kommune : process.env.CONFIG_NAME || 'aarhus'; // eslint-disable-line no-process-env

  let conf = config[kommune];

  return {
    kommune: kommune,
    bodyclass: kommune + '-kommune',
    config: conf,
    libraryId: conf.agency,
    styles: app.locals.styles[kommune] || app.locals.styles.aarhus
  };
}

function libraryStyleWare(req, res, next) {
  let libdata = res.locals.libdata = getKommuneConf(req.get('host'), req.app.get('Configuration'), req.app);
  res.locals.title = libdata.config.applicationTitle;
  next();
}

function librarySocketWare(config, app, _socket, next) {
  _socket.libdata = getKommuneConf(_socket.handshake.headers.host, config, app);
  next();
}

const mobilsoegmiddleware = {
  libraryStyleWare: libraryStyleWare,
  librarySocketWare: librarySocketWare
};
export default mobilsoegmiddleware;
