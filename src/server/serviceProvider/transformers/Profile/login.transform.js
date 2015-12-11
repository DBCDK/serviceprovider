'use strict';

const LoginProfileTransform = {

  event() {
    return 'loginProfile';
  },

  requestTransform(event, query) { // eslint-disable-line no-unused-vars
    let promise = this.callServiceClient('profile', 'loginProfile', query);
    return promise;
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    return JSON.parse(response.body);
  }
};

export default LoginProfileTransform;
