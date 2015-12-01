/**
 * @file Contains mobilsøg specific middleware.
 */
'use strict';

import {has} from 'lodash';

function libraryStyleWare(req, res, next) {
  let kommune = req.get('host').split('.')[0];
  let config = req.app.get('Configuration');
  kommune = has(config, kommune) ? kommune : process.env.CONFIG_NAME || 'aarhus';// eslint-disable-line no-process-env
  let conf = config[kommune];

  res.locals.libdata = {
    kommune: kommune,
    bodyclass: kommune + '-kommune',
    config: conf,
    libraryId: conf.agency
  };
  res.locals.title = conf.applicationTitle;

  next();
}

const mobilsoegmiddleware = {
  libraryStyleWare: libraryStyleWare
};
export default mobilsoegmiddleware;
