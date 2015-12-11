'use strict';

const GetProfileTransform = {

  event() {
    return 'getProfile';
  },

  requestTransform(event, query, connection) {
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    const params = {
      accessToken: passport.user.id,
      id: passport.user.uid
    };

    return this.callServiceClient('profile', 'getProfile', params);
  },

  responseTransform(response, query, connection) { // eslint-disable-line no-unused-vars
    const loopbackProfile = JSON.parse(response.body);

    const profile = {
      name: loopbackProfile.email,
      imageUrl: loopbackProfile.imageUrl,
      id: loopbackProfile.id,
      favoriteLibraries: loopbackProfile.favoriteLibraries ? loopbackProfile.favoriteLibraries : [],
      likes: loopbackProfile.likes,
      groups: loopbackProfile.groups,
      userIsLoggedIn: (!loopbackProfile.error)
    };

    return profile;
  }
};

export default GetProfileTransform;
