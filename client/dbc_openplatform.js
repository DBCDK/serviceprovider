if (typeof Promise === 'undefined') {
  throw 'old browser without Promise object. Please load a polyfill before loading dbc_openplatform.min.js, if you want to make it work';
}

var sc;
sc = false;
var apiToken;
var endpoints = [
  'availability',
  'events',
  'facets',
  'infomedia',
  'libraries',
  'news',
  'order',
  'recommend',
  'renew',
  'search',
  'status',
  'storage',
  'suggest',
  'user',
  'work'
];

var connectedFn;
var connecting = new Promise(function(resolve, reject) {
  connectedFn = resolve;
});

openplatform = {};
/**
 * Create a new method, for an endpoint.
 * The resulting function takes (an object of parameters) as parameter,
 * and returns a promise with the result.
 */
function endpoint(name) {
  return function(obj) {
    return connecting.then(function() {
      var params = {access_token: apiToken};
      for (var key in obj)
        if (obj.hasOwnProperty(key)) {
          params[key] = obj[key];
        }
      var envelope = params.envelope;
      delete params.envelope;
      return new Promise(function(resolve, reject) {
        sc.emit(name, params, function(err, result) {
          if (err) {
            return reject(err);
          }
          if (!result.statusCode || result.statusCode !== 200) {
            reject(result);
          } else {
            resolve(envelope ? result : result.data);
          }
        });
      });
    });
  };
}

/**
 * Assign methods for all endpoints.
 */
for (var i = 0; i < endpoints.length; ++i) {
  openplatform[endpoints[i]] = endpoint(endpoints[i]);
}

/**
 * Connect to the DBC open platform.
 * takes token, or client_id,client_secret
 * or client_id,client_secret,user_id,user_passed
 * as parameters.
 *
 * @return a promise with the token.
 */
openplatform.connect = function(options) {
  var promise,
    args,
    clientId,
    clientSecret,
    user,
    password,
    socketClusterConfig;
  socketClusterConfig = {
    hostname: 'openplatform.dbc.dk',
    ackTimeout: 30000,
    port: 443,
    secure: true,
    path: '/v3/socketcluster/?access_token='
  };

  args = Array.prototype.slice.call(arguments);
  if (args.length === 0) {
    if (!apiToken) {
      throw 'missing token to connect';
    }
    promise = Promise.resolve(apiToken);
  } else if (args.length === 1) {
    if (typeof args[0] === 'string') {
      // token as parameter
      promise = Promise.resolve(args[0]);
    } else {
      // option object
      socketClusterConfig = options.socketClusterConfig || socketClusterConfig;
      if (options.token) {
        promise = Promise.resolve(options.token);
      } else {
        promise = getToken(
          options.clientId,
          options.clientSecret,
          options.user || '@',
          options.password || '@'
        );
      }
    }
  } else {
    clientId = args[0];
    clientSecret = args[1];
    if (args.length === 2) {
      user = '@';
      password = '@';
    } else if (args.length === 4) {
      user = args[2];
      password = args[3];
    } else {
      throw 'openplatform.connect takes 0, 1, 2 or 4 parameters';
    }
    if (user.indexOf('@') === -1) {
      throw 'id should be the concatenation of user-id, "@", and agency-id';
    }
    promise = getToken(clientId, clientSecret, user, password);
  }
  return promise.then(function(token) {
    apiToken = token;
    return new Promise(function(resolve, reject) {
      if (sc) {
        if (openplatform.connected()) {
          return resolve(token);
        }
        sc.on('connectAbort', function() {
          sc = undefined;
          resolve(openplatform.connect(token));
        });
        sc.on('connect', function() {
          resolve(token);
        });
        sc.connect();
        return;
      }
      socketClusterConfig.path += token;
      sc = require('socketcluster-client').connect(socketClusterConfig);
      sc.on('connectAbort', function(result) {
        reject(result);
      });
      sc.on('connect', function() {
        connectedFn();
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
openplatform.disconnect = function() {
  if (sc) {
    sc.disconnect();
  }
  return Promise.resolve();
};
/**
 * Check if we are connected to the server
 * @return a boolean of whether we are connected
 */
openplatform.connected = function() {
  return sc && sc.state === 'open';
};
/**
 * Get a token, given a login.
 * This function is not exported.
 */
function getToken(clientId, clientSecret, user, passwd) {
  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://auth.dbc.dk/oauth/token');

  xhr.setRequestHeader(
    'Authorization',
    'Basic ' + btoa(clientId + ':' + clientSecret)
  );

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.send('grant_type=password' + '&username=' + user + '&password=' + passwd);

  return new Promise(function(resolve, reject) {
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var result = xhr.response;
          result = JSON.parse(result).access_token;
          resolve(result);
        } else {
          reject({statusCode: xhr.status, error: xhr.response});
        }
      }
    };
  });
}

module.exports = openplatform;
