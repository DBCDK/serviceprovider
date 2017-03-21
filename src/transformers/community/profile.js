import {Router} from 'express';
import {parseErrors, mapProfile} from './utils/parsers.util'

const router = Router();

export default () => {
  return router;
};

/**
 * Get list of profiles.
 */
router.get('/', (req, res) => {
  // TODO implement list method.
});


router.get('/:userId', (req, res) => {
  req.communityReguest(`profile/${req.params.userId}`, 'get').then(result => {
    const {data, errors} = JSON.parse(result);
    if (data) {
      res.jsonp({
        status: 200,
        data: mapProfile(data),
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


