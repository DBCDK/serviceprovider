'use strict';

/**
 * @file Group actions
 */

import Reflux from 'reflux';
import SocketClient from 'dbc-node-serviceprovider-socketclient';

const getGroupEvent = SocketClient('getGroup');
const updateGroupEvent = SocketClient('updateGroup');
const createGroupEvent = SocketClient('createGroup');
const joinGroupEvent = SocketClient('joinGroup');
const leaveGroupEvent = SocketClient('leaveGroup');
const createCommentEvent = SocketClient('commentOnGroupPost');
const createPostEvent = SocketClient('createGroupPost');

const GroupActions = Reflux.createActions([
  'saveGroup',
  'joinGroup',
  'confirmJoinGroup',
  'confirmLeaveGroup',
  'leaveGroup',
  'leaveConfirmGroup',
  'updateGroup',
  'fetchGroup',
  'confirmSaveGroup',
  'createGroup',
  'confirmCreateGroup',
  'createComment',
  'confirmCreateComment',
  'createPost',
  'confirmCreatePost',
  'toggleCommentExpansion',
  'toggleCreatePostMode',
  'toggleEditGroupMode',
  'toggleGroupMembership'
]);

GroupActions.saveGroup.listen(updateGroupEvent.request);
updateGroupEvent.response(GroupActions.confirmSaveGroup);

GroupActions.createGroup.listen(createGroupEvent.request);
createGroupEvent.response(GroupActions.confirmCreateGroup);

GroupActions.joinGroup.listen(joinGroupEvent.request);
joinGroupEvent.response(GroupActions.confirmJoinGroup);

GroupActions.leaveGroup.listen(leaveGroupEvent.request);
leaveGroupEvent.response(GroupActions.confirmLeaveGroup);

GroupActions.createComment.listen(createCommentEvent.request);
createCommentEvent.response(GroupActions.confirmCreateComment);

GroupActions.createPost.listen(createPostEvent.request);
createPostEvent.response(GroupActions.confirmCreatePost);

GroupActions.fetchGroup.listen(getGroupEvent.request);
getGroupEvent.response(GroupActions.updateGroup);

export default GroupActions;
