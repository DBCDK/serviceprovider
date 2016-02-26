'use strict';

const RemoveLikesTransform = {
  event() {
    return 'resetLikes';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};

    const params = {
      accessToken: passport.user.id,
      uid: passport.user.uid
    };

    return this.callServiceClient('profile', 'resetLikes', params);
  },

  responseTransform(response) {
    const isSuccesful = response.statusCode === 204 || response.statusCode === 200;
    return JSON.parse(isSuccesful);
  }
};

export default RemoveLikesTransform;
