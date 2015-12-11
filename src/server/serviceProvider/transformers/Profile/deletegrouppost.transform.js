'use strict';

const QueryGroupsTransform = {
  event() {
    return 'deleteGroupPost';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    return this.callServiceClient('profile', 'removeGroupPost', {
      groupId: query,
      accessToken: passport.user.id
    });
  },

  responseTransform(response, query, connection) { // eslint-disable-line no-unused-vars
    return {};
  }
};

export default QueryGroupsTransform;
