/**
 * Notice: this is just a quick hack
 * to extract some statistics..
 */
const request = require("request-promise-native");

function histogram(list) {
  let hist = {};
  for (const item of list) {
    hist[item] = (hist[item] || 0) + 1;
  }
  var ks = Object.keys(hist);
  ks.sort();
  hist = ks.map(k => [k, hist[k]]);
  return hist;
}

async function search(date, query) {
  date = new Date(date);
  const idx = {
    index: "syslogall-" + (1900 + date.getYear()) + "." + (1 + date.getMonth()),
    ignore_unavailable: true
  };
  const range = {
    "@timestamp": { gte: +date, lte: +date + 24 * 60 * 60 * 1000 }
  };
  const req = {
    size: 100000,
    query: {
      filtered: {
        query: { query_string: { analyze_wildcard: true, query } },
        filter: {
          bool: {
            must: [{ range }],
            must_not: []
          }
        }
      }
    },
    fields: ["*", "_source"],
    fielddata_fields: ["@timestamp"]
  };
  const opt = {
    url:
      "http://elk:5601/elasticsearch/_msearch?timeout=0&ignore_unavailable=true&preference=1510746108264",
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(idx) + "\n" + JSON.stringify(req) + "\n"
  };
  const result = JSON.parse(await request.post(opt)).responses[0].hits;
  return result.hits.map(o => JSON.parse(o._source.syslog_message));
}

async function stat({
  query,
  filter = () => true,
  extract = o => o.name + " " + o.version
}) {
  const total = {};
  let result;
  for (
    date = +new Date("2017-10-01");
    date < Date.now();
    date = date + 24 * 60 * 60 * 1000
  ) {
    let hits;
    try {
      hits = (await search(date, query)).filter(filter);
    } catch (e) {
      hits = [];
    }
    const hist = histogram(hits.map(extract));
    for (const [entry, count] of hist) {
      total[entry] = (total[entry] || 0) + count;
    }

    console.log("\n\n", new Date(date).toISOString() + " " + hits.length);
    result = Object.keys(total);
    result.sort((a, b) => total[b] - total[a]);
    console.log(result.map(k => k + "\t" + total[k]).join("\n"));
  }
  return result;
  console.log("total");
}

async function main() {
  const endpoints1 = await stat({
    query: '"platformbe-p01" AND serviceprovider AND transformer',
    extract: o => o.name + " " + o.version,
    filter: o => o.msg === "transformer"
  });
  const endpoints2 = await stat({
    query: '"platformbe-p02" AND serviceprovider AND transformer',
    extract: o => o.name + " " + o.version,
    filter: o => o.msg === "transformer"
  });
  const endpoints = endpoints1.concat(
    endpoints2.filter(s => !endpoints1.includes(s))
  );
  endpoints.sort();

  const clientIds = await stat({
    query:
      '("platformbe-p01" OR "platformbe-p02") AND smaug AND "model.getClient success"',
    extract: o => o.clientId
  });

  console.log(endpoints.length, "endpoints used.\n");
  console.log(endpoints.map(s => "  " + s).join("\n"));
  console.log(clientIds.length, "clientIds logged in.\n");
  console.log(
    clientIds
      .map(o => "  " + o /*.slice(0,8) + '-XXX-XXX-XXX-XXXXXXXXXXXX'*/)
      .join("\n")
  );
}

main();
