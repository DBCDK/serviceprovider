const router = require('express').Router();

export default () => {
  return router;
};

router.get('/', (req, res) => {
  // TODO implement list method.
});

router.get('/:userId', (req, res) => {
  req.communityReguest(`profile/${req.params.userId}`, 'get').then(result => {
    res.jsonp(JSON.parse(result));
  }).catch(
    err => res.jsonp(err)
  );
});
