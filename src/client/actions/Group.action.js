'use strict';

/**
 * @file Group actions
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const getGroupEvent = SocketClient('getGroup');
const updateGroupEvent = SocketClient('updateGroup');
const createGroupEvent = SocketClient('createGroup');

const GroupActions = Reflux.createActions([
  'saveGroup',
  'updateGroup',
  'fetchGroup',
  'confirmSaveGroup',
  'createGroup',
  'confirmCreateGroup'
]);

GroupActions.saveGroup.listen(updateGroupEvent.request);
updateGroupEvent.response(GroupActions.confirmSaveGroup);

GroupActions.createGroup.listen(createGroupEvent.request);
createGroupEvent.response(GroupActions.confirmCreateGroup);

GroupActions.fetchGroup.listen(getGroupEvent.request);
getGroupEvent.response(GroupActions.updateGroup);

export default GroupActions;
