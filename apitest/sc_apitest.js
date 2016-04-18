function identity(x) { return x; }
function filterComments(x) { return !x.startsWith('#'); }

var majorVersion = parseInt(require('../package.json').version, 10);

var reqs = require('fs')
  .readFileSync('requests.lst', 'utf-8')
  .split('\n')
  .filter(identity)
  .filter(filterComments)
  .map(function(s) {
    var result = s.split(' ');
    result[1] = result[1] ?  JSON.parse(result[1]) : {};
    return result;
  })
  .reverse();

var sc = require('socketcluster-client')
  .connect({port:8080, hostname:'localhost', path: '/v' + majorVersion + '/socketcluster/'});

function next() {
  var req = reqs.pop();
  console.log('\n' + req[0] + ' ' + JSON.stringify(req[1]));
  console.error('executing:', req[0]);
  sc.emit(req[0], req[1], function(result) {
    console.log(JSON.stringify([result]).slice(1,-1));
    if(reqs.length) {
      next();
    } else {
      process.exit(0);
    }
  });
}

sc.on('connect', function() { next(); });
