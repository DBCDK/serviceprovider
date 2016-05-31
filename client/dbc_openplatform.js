(function() {
  if(typeof Promise === 'undefined') {
    throw 'old browser without Promise object. Please load a polyfill before loading dbc_openplatform.min.js, if you want to make it work';
  }
  var sc;
  sc = false;
  var apiToken;
  var endpoints = [
    'availability',
    'events',
    'facets',
    'libraries',
    'news',
    'order',
    'rank',
    'recommend',
    'renew',
    'search',
    'suggest',
    'user',
    'work'];

  dbcOpenPlatform = {};
  /**
   * Create a new method, for an endpoint.
   * The resulting function takes (an object of parameters) as parameter, 
   * and returns a promise with the result.
   */
  function endpoint(name) {
    return function(obj) {
      params = {access_token: apiToken};
      for(var key in obj) if(obj.hasOwnProperty(key)) {
        params[key] = obj[key];
      }
      var envelope = params.envelope;
      delete params.envelope;
      if(!this.connected()) {
        return Promise.reject('need to connect before calling endpoint');
      }
      return new Promise(function(resolve, reject) {
        sc.emit(name, params, function(err, result) {
          if(err) {
            return reject(err);
          }
          if(!result.statusCode || result.statusCode !== 200) {
            reject(result);
          } else {
            resolve(envelope ? result : result.data);
          }
        });
      });
    };
  }

  /**
   * Assign methods for all endpoints.
   */
  for(var i = 0; i < endpoints.length; ++i) {
    dbcOpenPlatform[endpoints[i]] = endpoint(endpoints[i]);
  }

  /**
   * Connect to the DBC open platform.
   * takes token, or client_id,client_secret 
   * or client_id,client_secret,user_id,user_passed
   * as parameters.
   *
   * @return a promise with the token.
   */
  dbcOpenPlatform.connect = function() {
    var promise, args, clientId, clientSecret, user, password;

    args = Array.prototype.slice.call(arguments);
    if(!args.length === 0 && !apiToken) {
      if(!apiToken) {
        throw 'missing token to connect';
      }
      promise = Promise.resolve(apiToken);
    } else if(args.length === 1) {
      promise = Promise.resolve(args[0]);
    } else {
      clientId = args[0];
      clientSecret = args[1];
      if(args.length === 2) {
        user = '@';
        password = '@';
      } else if(args.length === 4) {
        user = args[2];
        password = args[3];
      } else {
        throw 'dbcOpenPlatform.connect takes 0, 1, 2 or 4 parameters'
      }
      if(user.indexOf('@') === -1) {
        throw 'id should be the concatenation of user-id, "@", and agency-id';
      }
      promise = getToken(clientId, clientSecret, user, password);
    }
    return promise.then(function(token) {
      apiToken = token;
      return new Promise(function(resolve, reject) {
        if(sc) {
          if(dbcOpenPlatform.connected()) {
            return resolve(token);
          }
          sc.on('connectAbort', function() {
            sc = undefined;
            resolve(dbcServiceProvider.connect(token));
          });
          sc.on('connect', function() {
            resolve(token);
          });
          sc.connect();
          return;
        } 
        sc = require('socketcluster-client').connect({
            hostname: 'openplatform.dbc.dk', 
            port: 443,
            secure: true,
            path: '/v1/socketcluster/?access_token=' + token
          });
        sc.on('connectAbort', function(result) {
          reject(result);
        });
        sc.on('connect', function() {
          resolve(token);
        });
      });
    });
  };
  /**
   * Disconnect from server
   *
   * @return a promise of nothing.
   */
  dbcOpenPlatform.disconnect = function() {
    if(sc) {
      sc.disconnect();
    }
    return Promise.resolve();
  };
  /**
   * Check if we are connected to the server
   * @return a boolean of whether we are connected
   */
  dbcOpenPlatform.connected = function() {
    return sc && sc.state === 'open';
  };
  /**
   * Get a token, given a login.
   * This function is not exported.
   */
  function getToken(clientId, clientSecret, user, passwd) {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://auth.dbc.dk/oauth/token');

    xhr.setRequestHeader('Authorization', 'Basic ' + 
        btoa(clientId + ':' + clientSecret));

    xhr.setRequestHeader('Content-Type',
        'application/x-www-form-urlencoded');

    xhr.send('grant_type=password' +
        '&username=' + user +
        '&password=' + passwd);

    return new Promise(function(resolve, reject) {
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            var result = xhr.response;
            result = JSON.parse(result).access_token;
            resolve(result);
          } else {
            reject({statusCode: xhr.status, error: xhr.response});
          }
        }
      }
    });
  }
})();
