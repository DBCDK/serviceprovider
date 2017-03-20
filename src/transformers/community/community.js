const router = require('express').Router();
import profile from './profile';

import {accessLogMiddleware, getContextMiddleware, requireAuthorized} from '../../app.middlewares';


/**
 * Router for all community/profile endpoints.
 *
 * @returns {*}
 */
export default () => {
  router.use(getContextMiddleware);
  router.use(requireAuthorized);
  router.use('/profile', profile());
  return router;
};
