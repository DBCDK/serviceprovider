'use strict';

const CreateProfileTransform = {

  event() {
    return 'createProfile';
  },

  requestTransform(event, query) { // eslint-disable-line no-unused-vars
    let promise = this.callServiceClient('profile', 'createProfile', query);
    return promise;
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    return JSON.parse(response.body);
  }
};


export default CreateProfileTransform;
