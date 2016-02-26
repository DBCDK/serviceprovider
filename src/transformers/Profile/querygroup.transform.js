'use strict';

const QueryGroupsTransform = {
  event() {
    return 'queryGroups';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    return this.callServiceClient('profile', 'queryGroups', {
      query: query,
      accessToken: passport.user.id,
      id: passport.user.uid
    });
  },

  responseTransform(response, query, connection) { // eslint-disable-line no-unused-vars
    let groups = JSON.parse(response.body);
    return {groups: groups};
  }
};

export default QueryGroupsTransform;
