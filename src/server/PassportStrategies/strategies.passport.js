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
  // const logger = app.get('logger');
  const serviceProvider = app.get('serviceProvider');

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use('borchk', new BorchkStrategy(
    (agencyid, loanerid, pincode, done) => {
      console.log('done'); // eslint-disable-line
      const BorchkResponse = serviceProvider.trigger(
        'checkBorrower', {
          agencyID: agencyid,
          loanerID: loanerid,
          pincode: pincode
        }
      );

      Promise.all(BorchkResponse).then((response) => {
        const borchkResponse = response[0];

        console.log('borchkResponse', borchkResponse); // eslint-disable-line
        if (borchkResponse.requestStatus === 'ok') {

          const user = {
            agencyid: agencyid,
            loanerid: loanerid,
            pincode: pincode
          };

          done(null, user);
        }
      });

      /*
       let loginResponse = serviceProvider.trigger(
       'loginProfile', {
       email: username,
       password: password
       }
       );
       */
      /*
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
       */
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
