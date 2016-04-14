'use strict';

const UpdateProfileTransform = {

  event() {
    return 'saveLike';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};

    const params = {
      accessToken: passport.user.id,
      uid: passport.user.uid,
      item_id: query.item_id,
      value: null
    };

    const id = query.id || null;

    let request = null;
    switch (query.action) {
      case 'like':
        params.value = 1;
        request = this.saveLike(params, id);
        break;
      case 'dislike':
        params.value = -1;
        request = this.saveLike(params, id);
        break;
      case 'remove':
        params.id = id;
        request = this.makeCallToServiceClient('removeLike', params);
        break;
      default:
        break;
    }

    return request;
  },

  saveLike(params, id) {
    let request = null;
    if (id) {
      params.id = id;
      request = this.makeCallToServiceClient('updateLike', params);
    }
    else {
      request = this.makeCallToServiceClient('saveLike', params);
    }

    return request;
  },

  makeCallToServiceClient(method, params) {
    return this.callServiceClient('profile', method, params);
  },

  responseTransform(response) {
    const isSuccesful = response.statusCode === 204 || response.statusCode === 200;
    return JSON.parse(isSuccesful);
  }
};

export default UpdateProfileTransform;
