'use strict';

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';
let socket = SocketClient('getPersonalRecommendations');

const RecommendationActions = Reflux.createActions([
  'getRecommendations',
  'getRecommendationsResponse'
]);

RecommendationActions.getRecommendations.listen(socket.request);
socket.response(RecommendationActions.getRecommendationsResponse);

export default RecommendationActions;
