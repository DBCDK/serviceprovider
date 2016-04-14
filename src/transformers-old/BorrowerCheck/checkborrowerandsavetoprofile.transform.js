'use strict';

import {findIndex} from 'lodash';

const CheckBorrowerAndSaveToProfileTransform = {

  event() {
    return 'checkBorrowerAndSaveToProfile';
  },

  requestTransform(event, query, connection) { // eslint-disable-line no-unused-vars
    return new Promise((resolve) => {
      this.callServiceClient('borchk', 'getBorrowerCheckResult', {
        userId: query.updatedLibrary.borrowerID,
        userPincode: query.updatedLibrary.borrowerPIN || '',
        libraryCode: query.updatedLibrary.libraryID
      }).then((response) => {
        if (response.requestStatus === 'ok') {
          // Borrowercheck said ok to borrower, saving info to profile
          const libraryIndex = findIndex(query.favoriteLibraries, 'agencyID', query.updatedLibrary.agencyID);
          if (libraryIndex >= 0) {
            query.favoriteLibraries[libraryIndex] = query.updatedLibrary;
          }
          else {
            query.favoriteLibraries.push(query.updatedLibrary);
          }

          const passport = connection.request.session.passport || {user: {id: '', uid: ''}};
          let loopbackProfile = {
            accessToken: passport.user.id,
            id: passport.user.uid,
            favoriteLibraries: query.favoriteLibraries
          };

          this.callServiceClient('profile', 'updateProfile', loopbackProfile).then((resp) => {
            resolve({
              borchk: response,
              profile: resp
            });
          });
        }
        else {
          resolve({
            borchk: response,
            profile: {
              statusCode: 500
            }
          });
        }
      });
    });
  },

  responseTransform(response) {
    return {
      borrowerStatus: response.borchk.requestStatus,
      profileStatus: response.profile.statusCode === 200
    };
  }
};


export default CheckBorrowerAndSaveToProfileTransform;
