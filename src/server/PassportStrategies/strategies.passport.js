'use strict';

/**
 * @file
 * This file contains the various strategies used by PassportJS in PG and MobilSøg
 */

import passport from 'passport';

// Strategies
import LocalStrategy from 'passport-local';
import BorchkStrategy from 'passport-borchk';

export function MobilSoegPassportConfig(app) {
  const logger = app.get('logger');
  const serviceProvider = app.get('serviceProvider');

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use('borchk', new BorchkStrategy(
    (agencyid, loanerid, pincode, done) => {
      const promisses = serviceProvider.trigger(
        'checkBorrower', {
          agencyID: agencyid,
          loanerID: loanerid,
          pincode: pincode
        }
      );

      Promise.all(promisses)
        .then((response) => {
          const borchkResponse = response[0];
          const openAgencyResponse = response[1];

          if (borchkResponse.error) {
            done(borchkResponse.error);
          }

          if (borchkResponse.requestStatus === 'ok') {
            // retrieve the users profile from the profileservice.
            const profilePromise = serviceProvider.trigger('findMobilSoegProfile', {agencyid: agencyid, loanerid: loanerid});
            Promise.all(profilePromise).then((resp) => {
              logger.info('Got the following response from the profile service while logging in user', {response: resp, agencyid: agencyid, loanerid: loanerid});
              const profileResponse = resp[0].body;
              const user = {
                agencyid: agencyid,
                loanerid: loanerid,
                pincode: pincode,
                branchNames: openAgencyResponse.branchNames,
                profile: {
                  pickup_agency: profileResponse.pickup_agency,
                  mobilSoegProfileId: profileResponse.mobilSoegProfileId,
                  likes: profileResponse.likes
                }
              };
              done(null, user);
            }, (error) => {
              logger.error('Failed to log in user due to some error in the profileservice', {
                error: error,
                agencyid: agencyid,
                loanerid: loanerid,
                borchkResponse: borchkResponse.requestStatus,
                openAgencyResponse: openAgencyResponse
              });
              done('Error on finding mobil soeg profile', false);
            });
          }
          else {
            logger.warning('User could not be verified against borchk', {
              borchkResponse: borchkResponse,
              openAgencyResponse: openAgencyResponse,
              agencyid: agencyid,
              loanerid: loanerid
            });
            done(null, null, borchkResponse);
          }
        })
        .catch((e) => {
          logger.error('Some error occured while resolving a promise from borchk during login', {error: e});
        }, (err) => {
          // return 500 Internal Error status code
          logger.error('Error in local borchk strategy, promise rejected', {error: err});
          done(null, false);
        });
    }
  ));

  passport.serializeUser((loopbackSession, done) => {
    done(null, loopbackSession);
  });

  passport.deserializeUser((id, done) => {
    done(null, id);
  });
}

export function PGPassportConfig(app) {
  const logger = app.get('logger');
  const serviceProvider = app.get('serviceProvider');

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use('local', new LocalStrategy({},
    (username, password, done) => {
      let loginResponse = serviceProvider.trigger(
        'loginProfile', {
          email: username,
          password: password
        }
      );

      Promise.all(loginResponse).then((response) => {
        const result = response[0];
        const isLoginSuccesful = typeof result.error === 'undefined';
        if (isLoginSuccesful) {
          const user = {
            id: result.id,
            uid: result.userId,
            ttl: result.ttl
          };
          done(null, user);
        }
        else {
          done(null, false);
        }
      }, (err) => {
        // return 500 Internal Error status code
        logger.error('Error in local login strategy, promise rejected', err);
        done(null, false);
      });
    }
  ));

  passport.serializeUser((loopbackSession, done) => {
    done(null, loopbackSession);
  });

  passport.deserializeUser((id, done) => {
    done(null, id);
  });
}
