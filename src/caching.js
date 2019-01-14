/*

Schema:

- key
- subkey
- date
- value

primary key(key, subkey)

*/

let cleared = '';
function today() {
  return (new Date()).toISOString().slice(0,10);
}
function clear() {
  const today = 
  if(cleared !== today()) {
    // "DELETE FROM cache WHERE date < %", today()
    cleared = today();
  }
}

async function cached(key, subkey, fn, rerun=false) {
  const [o] = "SELECT FROM cache WHERE key=% AND subkey=%";
  if(!o) {
    const value = await fn();
    "INSERT INTO cache {key, subkey, today, value}"
    return value;
  } else {
    if(o.date !== today()) {
      if(rerun) {
        (async () => {
        const value = await fn();
        'UPDATE cache SET date=$today, $value WHERE key=$key AND subkey=$subkey'
        })();
      } else {
      'UPDATE cache SET date=$today WHERE key=$key AND subkey=$subkey'
      }
    }
    return o.value;
  }
}

async function invalidate(key) {
  // "DELETE FROM cache WHERE key=%", key
}
