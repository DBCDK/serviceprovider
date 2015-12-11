'use strict';

const CommentOnGroupPostTransform = {

  event() {
    return 'commentOnGroupPost';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    const passport = connection.request.session.passport || {user: {id: '', uid: ''}};

    let commentObject = {
      accessToken: passport.user.id,
      uid: passport.user.uid,
      postId: query.postId,
      commentText: query.commentText
    };

    return this.callServiceClient('profile', 'commentOnGroupPost', commentObject);
  },

  responseTransform(response, query) { // eslint-disable-line no-unused-vars
    const isSuccesful = response.statusCode === 200;
    return JSON.parse(isSuccesful);
  }
};


export default CommentOnGroupPostTransform;
