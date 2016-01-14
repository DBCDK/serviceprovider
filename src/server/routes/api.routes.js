'use strict';

/**
 * @file
 * Configure Event Page routes
 */

import express from 'express';

export default express.Router().post(['/:event'], (req, res) => {
  const event = req.params.event;
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
