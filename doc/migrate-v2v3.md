# Open Platform v.2 -> v.3

Changes to the Open Platform API that should be attended when migrating from v. 2 to v. 3:

- New `Suggest/suggest` endpoint, replaces the old `Suggest/suggest` endpoint. Uses new suggester backend.
   - Enhanced response
   - New type: `all`
- New `Recommend/recommend` endpoint, replaces the old `Recommend/recommend` endpoint. Uses new recommender backend.
   - Parameters `offset`, `filters` and `boosters` added
   - Changed response, see below
- `Recommend/rank` endpoint revoked
- `Order/order` endpoint:
   - `orderId` has been split into `orderId` and `orderType`. Both parameters are mandatory when modifying orders. Possible values for orderType are `Estimate`, `Hold`, `Loan`, `Non-returnable Copy`, `normal`, and `Stack Retrieval`.
   - `library` parameter renamed to `pickUpBranch`.
- `Order/availability` now takes a *list* of pids - and returns a *list* of items.
- New `Status/status` endpoint with status and performance statistics for OpenPlatform
 
## Recommend response
 
<table border=1>
<tr> <th> version 2 </th> <th> version 3 </th> </tr>
<tr><td>

```
  "data": [
    {
      "creator": "Rune Fleischer",
      "val": 0.2737536614150203,
      "title": "Otto på festival",
      "pid": "870970-basis:50936163"
    },
```
</td><td>

```
  "data": [
    {
      "pid": "870970-basis:51268172",
      "val": 0.30339153343869557,
      "from": [
        "870970-basis:52559316"
      ]
    },
```
</td></tr>
</table>

