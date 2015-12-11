'use strict';

const LeaveGroupTransform = {

  event() {
    return 'leaveGroup';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars

    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
    let group = {
      accessToken: passport.user.id,
      memberId: passport.user.uid
    };

    for (var i in query) {
      if (query.hasOwnProperty(i)) {
        group[i] = query[i];
      }
    }

    return this.callServiceClient('profile', 'leaveGroup', group);
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    const isSuccesful = true;
    return JSON.parse(isSuccesful);
  }
};


export default LeaveGroupTransform;
