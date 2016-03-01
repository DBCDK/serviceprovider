'use strict';

/**
 * @file
 * Configure Event Page routes
 */

import express from 'express';
import swaggerFromSpec from './swaggerFromSpec.js';

export default express.Router().all(['/:event'], (req, res) => {
  const event = req.params.event;
  if (event === 'swagger.json') {
    return swaggerFromSpec().then((response) => {
      res.json(response);
    }, (error) => {
      res.json(error);
    });
  }

  const query = req.body[0];

  // very long timeout
  let prom = res.callServiceProvider(event, query, 900000);
  prom = Array.isArray(prom) ? prom : [prom];
  Promise.all(prom).then((response) => {
    res.json(response);
  }, (error) => {
    res.json(error);
  });
});
