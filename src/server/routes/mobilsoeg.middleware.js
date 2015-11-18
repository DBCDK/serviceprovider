/**
 * @file Contains mobilsøg specific middleware.
 */
'use strict';

function libraryStyleWare(req, res, next) {
  let kommune = req.get('host').split('.')[0];
  let config = req.app.get('Configuration');
  let conf = config[kommune] || config[process.env.CONFIG_NAME || 'palle']; // eslint-disable-line no-process-env

  res.locals.libdata = {
    kommune: kommune,
    bodyclass: kommune + '-kommune',
    config: conf,
    libraryId: conf.agency
  };
  next();
}

const mobilsoegmiddleware = {
  libraryStyleWare: libraryStyleWare
};
export default mobilsoegmiddleware;
