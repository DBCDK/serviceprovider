'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Order from '../Order/Order.component';
import CoverImage from '../CoverImage/CoverImageContainer.component';

/**
 * Entry point for Order
 *
 * If a querystring from the url exists it is added to the global window object, and should be passed to the client
 */
const image = <CoverImage pids={window.ORDER_PROPS.coverImageIds.split(',')} prefSize={'detail_500'} />;

ReactDOM.render(<Order coverImage={image} order={window.ORDER_PROPS || {}} />, document.getElementById('order'));
