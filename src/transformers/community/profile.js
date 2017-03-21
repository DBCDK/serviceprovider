import {Router} from 'express';
import {ProfileUtils, parseErrors} from './utils/parsers.util';
import mapper from 'object-mapper';
import {invert} from 'lodash';

const profileRouter = Router();
const profileUtils = ProfileUtils();

/**
 * Returns profile profileRouter.
 *
 * @returns {*}
 */
export default () => {
  return profileRouter;
};

/**
 * General profile request.
 *
 * @param req
 * @param res
 * @param params
 * @returns {Promise.<T>}
 */
function profileRequest(req, res, params) {
  return req.communityReguest(params).then(result => {
    const {data, errors} = params.method === 'get' && JSON.parse(result) || result;
    if (data) {
      const dataArray = Array.isArray(data) && data || [data];
      res.jsonp({
        status: 200,
        data: dataArray.map(profileUtils.mapperFromElvis),
        errors: []
      });
    }
    else {
      res.jsonp(parseErrors(errors));
    }
  }).catch(
    err => res.jsonp(err)
  );
}

/**
 * General profile validation method.
 *
 * @param req
 * @param res
 * @returns {boolean}
 */
function profileValidate(req, res) {
  const validateErrors = profileUtils.validate(req.body);
  if (validateErrors.length) {
    res.jsonp({
      status: 400,
      errors: validateErrors.map(o => String(o.stack).replace(/^instance\.?/, '')).join('\n'),
      data: []
    });
    return false;
  }
  return true;
}

/**
 * Get list of profiles.
 */
profileRouter.get('/', (req, res) => profileRequest(req, res, {path: 'profile', method: 'get'}));

/**
 * Get Profile
 */
profileRouter.get('/:id', (req, res) => profileRequest(req, res, {path: `profile/${req.params.id}`, method: 'get'}));

/**
 * Create profile.
 */
profileRouter.post('/', (req, res) => {
  if (!profileValidate(req, res)) {
    return false;
  }
  const profile = profileUtils.mapperToElvis(req.body);
  return profileRequest(req, res, {path: 'profile', method: 'post', json: profile});
});

/**
 * Update profile.
 */
profileRouter.put('/:id', (req, res) => {
  if (!profileValidate(req, res)) {
    return false;
  }

  const profile = profileUtils.mapperToElvis(req.body);
  profile.modified_by = Number(req.params.id);
  return profileRequest(req, res, {path: `profile/${req.params.id}`, method: 'put', json: profile});
});

