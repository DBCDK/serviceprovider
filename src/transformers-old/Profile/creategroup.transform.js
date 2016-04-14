'use strict';

const CreateGroupTransform = {

  event() {
    return 'createGroup';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars

    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};

    const today = new Date();

    let loopbackGroup = {
      accessToken: passport.user.id,
      groupownerid: passport.user.uid,
      timeCreated: today.toISOString()
    };

    for (var i in query) {
      if (query.hasOwnProperty(i)) {
        loopbackGroup[i] = query[i];
      }
    }

    return this.callServiceClient('profile', 'createGroup', loopbackGroup);
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars

    const isSuccesful = response.statusCode === 200;

    const parsedResponse = JSON.parse(response.body);
    const groupId = (isSuccesful) ? parsedResponse.id : null;

    const newResponse = {
      succes: isSuccesful,
      groupId: groupId
    };
    return newResponse;
  }
};


export default CreateGroupTransform;
