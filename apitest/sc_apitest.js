
function identity(x) { return x; }

var reqs = require('fs')
  .readFileSync('requests.lst', 'utf-8')
  .split('\n')
  .filter(identity)
  .map(function(s) { 
    var result = s.split(' ');
    result[1] = result[1] ?  JSON.parse(result[1]) : {};
    return result;
  })
  .reverse();

var sc = require('socketcluster-client')
  .connect({port:8080, hostname:'localhost'});

function next() {
  if(!reqs.length) {
    return;
  }
  var req = reqs.pop();
  console.log('\n' + req[0] + ' ' + JSON.stringify(req[1]));
  sc.emit(req[0], req[1], function(a, b) {
    console.log(a, b);
    next();
  });
}

sc.on('connect', function() {
  console.log('connected');
  next();
});
