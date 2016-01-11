/**
 * @file Contains mobilsøg specific middleware.
 */
'use strict';

import {has} from 'lodash';

function getKommuneConf(host, config) {
  let kommune = host.split('.')[0];
  kommune = has(config, kommune) ? kommune : process.env.CONFIG_NAME || 'aarhus'; // eslint-disable-line no-process-env

  let conf = config[kommune];

  return {
    kommune: kommune,
    bodyclass: kommune + '-kommune',
    config: conf,
    libraryId: conf.agency
  };
}

function libraryStyleWare(req, res, next) {
  let libdata = res.locals.libdata = getKommuneConf(req.get('host'), req.app.get('Configuration'));
  res.locals.specific_styles = req.app.locals.styles[libdata.kommune] || req.app.locals.styles.aarhus;
  res.locals.title = libdata.config.applicationTitle;
  next();
}

function librarySocketWare(config, _socket, next) {
  _socket.libdata = getKommuneConf(_socket.request.headers.host, config);
  next();
}

const mobilsoegmiddleware = {
  libraryStyleWare: libraryStyleWare,
  librarySocketWare: librarySocketWare
};
export default mobilsoegmiddleware;
