const router = require('express').Router()


export default () => {
  router.get('/', getProfiles);
  return router;
}

function getProfiles(req, res) {
  res.jsonp({test: 'it works'});
}