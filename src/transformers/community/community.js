const router = require('express').Router();
import profile from './profile';
import caller from '../../provider/caller';
import request from 'request';

import {accessLogMiddleware, getContextMiddleware, requireAuthorized} from '../../app.middlewares';

function getCommunityClient(req, res, next) {
  const context = caller({}, req.context);
  const url = context.get('services.communityservice') || 'http://localhost:3000/v1';
  const id = context.get('communityservice.id') || 1;
  req.communityReguest = (path, method, params) => {
    const options = Object.assign({
      url: `${url}/community/${id}/${path}`,
      method
    }, params);
    console.log(options);
    return new Promise((resolve, reject) => {
      request(options, (error, response, data) => error ? reject(error) : resolve(data));
    });
  };
  return next();
}

/**
 * Router for all community/profile endpoints.
 *
 * @returns {*}
 */
export default () => {
  router.use(getContextMiddleware);
  router.use(getCommunityClient);
  router.use(requireAuthorized);
  router.use('/profile', profile());
  return router;
};
