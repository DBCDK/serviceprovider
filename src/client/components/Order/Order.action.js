'use strict';

import Reflux from 'reflux';

const OrderActions = Reflux.createAction({children: ['updated', 'failed']});

export default OrderActions;
