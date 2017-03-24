import {Router} from 'express';
import EntityRequest from './utils/EntityRequest';
import createCRUD from './utils/createCRUD';

import {GroupUtils} from './utils/parsers.util';

/**
 * Returns group groupRouter.
 *
 * @returns {*}
 */
export default () => {
  return createCRUD('group', Router(), GroupUtils());
};
