const router = require('express').Router();

export default () => {
  return router;
};


router.get('/', (req, res) => {
  // TODO implement list method.
});

router.get('/:userId', (req, res) => {
  res.jsonp({
    profile: {
      id: req.params.userId
    }
  });
});