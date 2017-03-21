import {Router} from 'express';
import {ProfileUtils, parseErrors} from './utils/parsers.util';
import {validate} from 'jsonschema';
import mapper from 'object-mapper';
import {invert} from 'lodash';

const router = Router();
const profileUtils = ProfileUtils();
export default () => {
  return router;
};

/**
 * Get list of profiles.
 */
router.get('/', (req, res) => {
  return req.communityReguest('profile/', 'get').then(result => {
    const {data, errors} = JSON.parse(result);
    if (data) {
      res.jsonp({
        status: 200,
        data: data.map(profileUtils.mapperFromElvis),
        errors: []
      });
    }
    else {
      res.jsonp(parseErrors(errors));
    }
  }).catch(
    err => res.jsonp(err)
  );
});

/**
 * Create profile.
 */
router.post('/', (req, res) => {
  const validateErrors = profileUtils.validate(req.body);
  if (validateErrors.length) {
    return res.jsonp({
      status: 400,
      errors: validateErrors.map(o => String(o.stack).replace(/^instance\.?/, '')).join('\n'),
      data: []
    });
  }

  const profile = profileUtils.mapperToElvis(req.body);

  return req.communityReguest('profile/', 'post', {json: profile}).then(result => {
    const {data, errors} = result;
    if (data) {
      res.jsonp({
        status: 200,
        data: profileUtils.mapperFromElvis(data),
        errors: []
      });
    }
    else {
      res.jsonp(parseErrors(errors));
    }
  }).catch(
    err => res.jsonp(err)
  );
});

/**
 * Create profile.
 */
router.put('/:id', (req, res) => {
  const validateErrors = profileUtils.validate(req.body);
  if (validateErrors.length) {
    return res.jsonp({
      status: 400,
      errors: validateErrors.map(o => String(o.stack).replace(/^instance\.?/, '')).join('\n'),
      data: []
    });
  }

  const profile = profileUtils.mapperToElvis(req.body);
  profile.modified_by = Number(req.params.id);
  return req.communityReguest(`profile/${req.params.id}`, 'put', {json: profile}).then(result => {
    const {data, errors} = result;
    if (data) {
      res.jsonp({
        status: 200,
        data: profileUtils.mapperFromElvis(data),
        errors: []
      });
    }
    else {
      res.jsonp(parseErrors(errors));
    }
  }).catch(
    err => res.jsonp(err)
  );
});

/**
 * Get Profile
 */
router.get('/:userId', (req, res) => {
  req.communityReguest(`profile/${req.params.userId}`, 'get').then(result => {
    const {data, errors} = JSON.parse(result);
    if (data) {
      res.jsonp({
        status: 200,
        data: profileUtils.mapperFromElvis(data),
        errors: []
      });
    }
    else {
      res.jsonp(parseErrors(errors));
    }
  }).catch(
    err => res.jsonp(err)
  );
});

