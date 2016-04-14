'use strict';

const LogoutProfileTransform = {

  event() {
    return 'logoutProfile';
  },

  requestTransform(event, query) { // eslint-disable-line no-unused-vars
    let promise = this.callServiceClient('profile', 'logoutProfile', query);
    return promise;
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    return JSON.parse(response.body);
  }
};

export default LogoutProfileTransform;
