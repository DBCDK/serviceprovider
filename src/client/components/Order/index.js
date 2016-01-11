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
const order = JSON.parse(window.PAGE_DATA) || {};
const image = <CoverImage pids={[order.q]} prefSize={'detail_500'} />;

ReactDOM.render(
  <Order
    coverImage={image}
    order={order.work}
    orderId={order.q}
    pickupAgency={order.pickupAgency}
  />, document.getElementById('page'));
