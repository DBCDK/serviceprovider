import {Router} from 'express';
import EntityRequest from './utils/EntityRequest';

import {GroupUtils} from './utils/parsers.util';
import mapper from 'object-mapper';
import {invert} from 'lodash';

const groupRouter = Router();
/**
 * Returns group groupRouter.
 *
 * @returns {*}
 */
export default () => {
  return groupRouter;
};


/**
 * Factory function.
 *
 * @param req
 * @returns {EntityRequest}
 */
function groupRequest(req) {
  return new EntityRequest('group', req.communityReguest, GroupUtils());
}

/**
 * Get list of groups.
 */
groupRouter.get('/', async (req, res) => res.json(await groupRequest(req, res).getAll()));

/**
 * Get Group
 */
groupRouter.get('/:id', async (req, res) => res.json(await groupRequest(req, res).get(req.params.id)));

/**
 * Create Group.
 */
groupRouter.post('/', async (req, res) => res.json(await groupRequest(req, res).post(req.body)));

/**
 * Update Group
 */
groupRouter.put('/:id', async (req, res) => res.json(await groupRequest(req, res).put(req.params.id, req.body)));

/**
 * Delete Group
 */
groupRouter.delete('/', async (req, res) => res.json(await groupRequest(req, res).delete(req.params.id, req.body.profileId)));
