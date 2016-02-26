'use strict';

const QueryGroupsTransform = {
  event() {
    return 'getGroupPost';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    return this.callServiceClient('profile', 'getGroupPost', {
      postId: query,
      accessToken: passport.user.id
    });
  },

  responseTransform(response, query, connection) { // eslint-disable-line no-unused-vars
    return JSON.parse(response.body);
  }
};

export default QueryGroupsTransform;
