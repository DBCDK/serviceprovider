# this is examples of requests that can be used in zabbix

# you must edit these
export URL='http://localhost:8080/v1/'
export TOKEN="qwerty"


curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"pid": "870970-basis:51989252", "timings":true}' "${URL}availability"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"fields": ["title", "changed", "nid", "field_ding_event_title_image"], "timings":true}' "${URL}events"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"q" : "harry", "timings":true}' "${URL}facets"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"agencyIds": ["717500"], "fields": ["agencyId", "orderParameters"], "timings":true}' "${URL}libraries"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"fields": ["title", "changed", "nid", "field_ding_news_list_image"], "timings":true}' "${URL}news"

#curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"pids": ["870970-basis:28126727"], "expires": "2016-08-01", "library": "DK-100451", "timings":true}' "${URL}order"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"pids":["870970-basis:28511663", "870970-basis:29754519", "870970-basis:29060835", "870970-basis:28567057", "870970-basis:28043872", "870970-basis:28709994", "870970-basis:29319006", "870970-basis:27266428", "870970-basis:28724683", "874310-katalog:DBB0019369", "870970-basis:26923530", "870970-basis:29974861", "870970-basis:28456433", "870970-basis:28902239", "870970-basis:45188981"], "like":["870970-basis:45488713", "870970-basis:28643713", "870970-basis:29494940", "870970-basis:29386404", "870970-basis:28429576"], "timings":true}' "${URL}rank"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{"like":["870970-basis:45488713", "870970-basis:28643713", "870970-basis:29494940", "870970-basis:29386404", "870970-basis:28429576"], "limit":10, "timings":true}' "${URL}recommend"

#curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "loanId": "NCIPMDAxOXw5OTAwfHw5OTAwLnx8", "timings":true}' "${URL}renew"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "q": "hest", "fields": ["title"], "timings":true}' "${URL}search"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "q": "hest", "type": "creator", "timings":true}' "${URL}suggest"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "q": "køge", "type": "library", "timings":true}' "${URL}suggest"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "q": "hest", "type": "subject", "timings":true}' "${URL}suggest"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "q": "harry", "type": "title", "timings":true}' "${URL}suggest"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "pids": ["870970-basis:22629344"], "fields": ["title", "collection" ], "timings":true}' "${URL}work"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "pids": ["870970-basis:22629344"], "fields": ["title", "coverUrlFull"], "timings":true}' "${URL}work"

curl -sSL -w "\nCURL HTTPCODE=%{http_code} SECS=%{time_total}\n" -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: application/json" -X GET -d '{ "pids": ["870970-basis:22629344"], "fields": ["title" ], "timings":true}' "${URL}work"

