import {Router} from 'express';
import request from 'request';
import {profile} from './profile';
import {group, post, comment, review} from './entities';
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
  router.use('/groups', group());
  router.use('/posts', post());
  router.use('/comments', comment());
  router.use('/reviews', review());
  // Actions
  router.use('/likes', like());
  router.use('/follows', follow());
  router.use('/flags', flag());
  router.use('/quarantine', quarantine());

  return router;
};
