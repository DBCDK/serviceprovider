'use strict';

const UpdateProfileTransform = {

  event() {
    return 'updateProfile';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    query.email = query.name;

    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    let loopbackProfile = {
      accessToken: passport.user.id,
      id: passport.user.uid
    };

    for (var i in query) {
      if (query.hasOwnProperty(i)) {
        loopbackProfile[i] = query[i];
      }
    }

    return this.callServiceClient('profile', 'updateProfile', loopbackProfile);
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    const isSuccesful = response.statusCode === 200;
    return JSON.parse(isSuccesful);
  }
};


export default UpdateProfileTransform;
