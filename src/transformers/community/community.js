import {Router} from 'express';
import request from 'request';
import {profile} from './profile';
import {group, post, comment} from './entities';
import {like, follow, flag, quarantine} from './actions';
import caller from '../../provider/caller';
import {accessLogMiddleware, getContextMiddleware, requireAuthorized} from '../../app.middlewares';

/**
 * Router for all community/profile endpoints.
 *
 * @returns {*}
 */
export default () => {
  const router = Router();
  router.use(getContextMiddleware);
  router.use(requireAuthorized);
  // Profile
  router.use('/profiles', profile());
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
