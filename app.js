'use strict';
let express = require('express');
let path = require('path');

let app = express();
let server = require('http').Server(app);

// Port config
app.set('port', process.env.PORT || 8080);

// Configure templating
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
  res.render('frontpage');
});

// startup server
server.listen(app.get('port'), function() {
  console.log('Server listening on ' + app.get('port'));
  console.log('Versions: ', process.versions);
});
