import {Router} from 'express';
import {GroupUtils, parseErrors} from './utils/parsers.util';
import mapper from 'object-mapper';
import {invert} from 'lodash';

const groupRouter = Router();
const groupUtils = GroupUtils();

/**
 * Returns group groupRouter.
 *
 * @returns {*}
 */
export default () => {
  return groupRouter;
};

/**
 * General group request.
 *
 * @param req
 * @param res
 * @param params
 * @returns {Promise.<T>}
 */
function groupRequest(req, res, params) {
  return req.communityReguest(params).then(result => {
    const {data, errors} = params.method === 'get' && JSON.parse(result) || result;
    console.log(data);
    if (data) {
      const dataArray = Array.isArray(data) && data || [data];
      res.jsonp({
        status: 200,
        data: dataArray.map(groupUtils.mapperFromElvis),
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
 * General group validation method.
 *
 * @param req
 * @param res
 * @returns {boolean}
 */
function groupValidate(req, res) {
  const validateErrors = groupUtils.validate(req.body);
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
 * Get list of groups.
 */
groupRouter.get('/', (req, res) => {
  const json = {
    Entities: {type: 'post'},
    SortBy: 'created_epoch',
    Order: 'descending',
    Limit: 2,
    Offset: 0,
    Include: {
      title: 'title'
    }
  };
  groupRequest(req, res, {path: 'query', method: 'post', json})
});

/**
 * Get Group
 */
groupRouter.get('/:id', (req, res) => groupRequest(req, res, {path: `entity/${req.params.id}`, method: 'get'}));

/**
 * Create group.
 */
groupRouter.post('/', (req, res) => {
  if (!groupValidate(req, res)) {
    return false;
  }
  const group = groupUtils.mapperToElvis(req.body);
  return groupRequest(req, res, {path: 'entity', method: 'post', json: group});
});

/**
 * Update group.
 */
groupRouter.put('/:id', (req, res) => {
  if (!groupValidate(req, res)) {
    return false;
  }

  const group = groupUtils.mapperToElvis(req.body);
  return groupRequest(req, res, {path: `entity${req.params.id}`, method: 'put', json: group});
});

/**
 * Delete group.
 */
groupRouter.delete('entity/:id', (req, res) => groupRequest(req, res, {
  path: `/${req.params.id}`,
  method: 'put',
  json: {modified_by: Number(req.body.profileId)}
}));

