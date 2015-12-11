'use strict';

const QueryGroupsTransform = {
  event() {
    return 'updateGroupPost';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    return this.callServiceClient('profile', 'updateGroupPost', {
      title: query.title,
      content: query.content,
      postId: query.postId,
      accessToken: passport.user.id
    });
  },

  responseTransform(response, query, connection) { // eslint-disable-line no-unused-vars
    return {};
  }
};

export default QueryGroupsTransform;
