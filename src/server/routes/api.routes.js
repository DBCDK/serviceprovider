'use strict';

/**
 * @file
 * Configure Event Page routes
 */

import express from 'express';

export default express.Router().all(['/:event'], (req, res) => {
  const event = req.params.event;
  if (event === 'swagger.json') {
    require('fs').readFile(
      __dirname + '/../../../api/swagger/swagger.yaml',
      (err, result) => res.send(JSON.stringify(require('js-yaml').safeLoad(result))));
    return;
  }

  const query = req.body[0];

  // very long timeout
  let prom = res.callServiceProvider(event, query, 900000);
  prom = Array.isArray(prom) ? prom : [prom];
  Promise.all(prom).then((response) => {
    res.send(JSON.stringify(response));
  }, (error) => {
    res.send(JSON.stringify(error));
  });
});
