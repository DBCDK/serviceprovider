'use strict';

/**
 * @file
 * Configure passport and related things
 */

import passport from 'passport';
import {Strategy as LocalStrategy} from 'passport-local';

function passportConfig(app) {
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
      }, () => {
        // return 500 Internal Error status code
        logger.error('Error in local login strategy, promise rejected');
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

export default passportConfig;
