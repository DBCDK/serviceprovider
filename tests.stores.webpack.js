'use strict';

import 'babel-core/polyfill';

let context = require.context('./src/stores', true, /\.test\.js?$/);
context.keys().forEach(context);

// http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/ & https://github.com/kentor/react-flux-testing/blob/master/tests.webpack.js
