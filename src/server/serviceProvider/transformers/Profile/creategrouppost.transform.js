'use strict';

const QueryGroupsTransform = {
  event() {
    return 'createGroupPost';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars

    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    return this.callServiceClient('profile', 'createGroupPost', {
      title: query.title,
      content: query.content,
      groupId: query.groupId,
      uid: passport.user.uid,
      postownerid: passport.user.uid,
      accessToken: passport.user.id
    });
  },

  responseTransform(response, query, connection) { // eslint-disable-line no-unused-vars
    const isSuccesful = response.statusCode === 200;
    return JSON.parse(isSuccesful);
  }
};

export default QueryGroupsTransform;
