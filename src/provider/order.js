'use strict';
/**
 * Order transformer.
 */
import getOrderPolicy from './getOrderPolicy';

export default (request, context) => {

  return getOrderPolicy(request, context);

};
