import {Router} from 'express';
import createCRUD from './utils/createCRUD';

import {GroupUtils, PostUtils} from './utils/parsers.util';

/**
 * Returns group router.
 *
 * @returns {*}
 */
export function group () {
  return createCRUD('group', Router(), GroupUtils());
};

/**
 * Returns post router.
 *
 * @returns {*}
 */
export function post () {
  return createCRUD('post', Router(), PostUtils());
};

/**
 * Returns comment router.
 *
 * @returns {*}
 */
export function comment () {
  return createCRUD('comment', Router(), GroupUtils());
};
