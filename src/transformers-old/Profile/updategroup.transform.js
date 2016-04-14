'use strict';

const UpdateGroupTransform = {

  event() {
    return 'updateGroup';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars

    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    let group = {
      accessToken: passport.user.id,
      ownerId: passport.user.uid
    };

    for (var i in query) {
      if (query.hasOwnProperty(i)) {
        group[i] = query[i];
      }
    }

    return this.callServiceClient('profile', 'updateGroup', group);
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    const isSuccesful = response.statusCode === 200;
    return JSON.parse(isSuccesful);
  }
};


export default UpdateGroupTransform;
