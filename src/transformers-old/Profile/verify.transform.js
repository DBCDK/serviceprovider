'use strict';

const VerifyEmailTransform = {

  event() {
    return 'verifyEmail';
  },

  requestTransform(event, query) { // eslint-disable-line no-unused-vars
    let promise = this.callServiceClient('profile', 'verifyEmail', query);
    return promise;
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    return JSON.parse(response.body);
  }
};

export default VerifyEmailTransform;
