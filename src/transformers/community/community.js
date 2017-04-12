import {Router} from 'express';
import request from 'request';
import {profile} from './profile';
import {group, post, comment} from './entities';
import {like, follow, flag, quarantine} from './actions';
import caller from '../../provider/caller';
import {accessLogMiddleware, getContextMiddleware, requireAuthorized} from '../../app.middlewares';


/**
 * Middleware that adds community service and id to context.
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function getCommunityClient(req, res, next) {
  const context = caller({}, req.context);
  const baseurl = context.get('services.communityservice') || 'http://localhost:3000/v1';
  const id = context.get('communityservice.id') || 1;

  req.communityRequest = (params) => {
    const name = `${baseurl}/community/${id}/${params.path}`;
    delete params.path;

    return context.request(name, params);
  };

  return next();
}


/**
 * Router for all community/profile endpoints.
 *
 * @returns {*}
 */
export default () => {
  const router = Router();
  router.use(getContextMiddleware);
  router.use(getCommunityClient);
  router.use(requireAuthorized);
  // Profile
  router.use('/profile', profile());
  // Entities
  router.use('/group', group());
  router.use('/post', post());
  router.use('/comment', comment());
  // Actions
  router.use('/like', like());
  router.use('/follow', follow());
  router.use('/flag', flag());
  router.use('/quarantine', quarantine());

  return router;
};
