'use strict';

const GetGroupTransform = {

  event() {
    return 'getGroup';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    return this.callServiceClient('profile', 'getGroup', query);
  },

  responseTransform(response, query, connection) { // eslint-disable-line no-unused-vars
    const loopbackGroup = JSON.parse(response.body);

    const group = loopbackGroup;

    return group;
  }
};

export default GetGroupTransform;
