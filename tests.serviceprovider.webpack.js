'use strict';

let context = require.context('./src/server/serviceProvider', true, /\.test\.js?$/);
context.keys().forEach(context);

// http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/ & https://github.com/kentor/react-flux-testing/blob/master/tests.webpack.js
