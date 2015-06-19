'use strict';

import Reflux from 'reflux';
import SocketClient from '../utils/ServiceProviderSocketClient.js';

// Register an event related to a transform in the serviceprovider
// The event object has a request and response method
const event = SocketClient('getRecommendations');

/**
 * Recommendations is an asyncronous action. It is activated when the ResultList i changed
 */
const Recommendations = Reflux.createAction({
  children: ['updated', 'failed']
});

// Listens to actions that should update the Filter elements
Recommendations.listen(event.request);

// Listens for a response with filter elements
event.response(Recommendations.updated);

export default Recommendations;
