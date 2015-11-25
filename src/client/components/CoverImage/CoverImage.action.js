'use strict';

/**
 * @File
 * Actions for the CoverImage component
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const event = SocketClient('getCoverImage');

let CoverImageActions = Reflux.createAction({
  children: ['updated', 'failed']
});

CoverImageActions.listen(event.request);
event.response(CoverImageActions.updated);

export default CoverImageActions;
