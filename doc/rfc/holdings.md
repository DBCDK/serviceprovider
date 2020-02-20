# Holdingsitems API

Nedenstående er et bud på API til udstilling af beholdningsservice via den åbne platform. Der er beskrevet to endpoints. Et som henter holdingsitems på baggrund af et itemId og et som henter holdingsitems på baggrund af en liste pid'er.

## Kald 1: Holdingsitems per itemId

`curl https://openplatform.dbc.dk/v3/holdingsitems/?access_token={TOKEN}agency=${AGENCY}&item_id=${ITEM_ID}`

Kaldet returnerer en liste af holdingsitems:

```{
  "statusCode": 200,
  "data": {
    "holdingsitems": [
      {
        "bibliographicRecordId": "",
        "issueId": "",
        "itemId": "xxx",
        "branchId": "", // Først når det er tilgængeligt i database
        "branch": "",
        "department": "",
        "location": "",
        "subLocation": "",
        "issueText": "",
        "status": "",
        "circulationRule": "",
        "readyForLoan": 0,
        "note": ""
      },
      ...
    ]
  }
}
```

Der gælder for listen af holdingsitems, at det:

- vil være en tom liste, hvis der ikke er noget item med denne itemId
- vil normalt kun indeholde én beholdning
- vil indeholde mere end én beholdning, hvis samme itemId er knyttet op på mere end ét bibliographicRecordId/issueId (dette vil under normale omstændigheder være en fejl, f.eks. et issue har ændret id og gammelt issue er endnu ikke er slettet)

**NB: branchId er først tilgængelig, når det er tilgængeligt i databasen**

## Kald 2: Holdingsitems for liste af pid'er

`curl https://openplatform.dbc.dk/v3/holdingsitems/?access_token={TOKEN}agency={AGENCY}&pids={PID1},{PID2}...`

Resultatet indeholder en liste, med en indgang for hver pid i kaldet. For hver pid findes en liste af holdingsitems:

```
{
  "statusCode": 200,
  "data": [
    {
      "pid": "pid1",
      "holdingsitems": [
        {
          "bibliographicRecordId": "",
          "issueId": "",
          "itemId": "xxx",
          "branchId": "", // Først når det er tilgængeligt i database
          "branch": "",
          "department": "",
          "location": "",
          "subLocation": "",
          "issueText": "",
          "status": "",
          "circulationRule": "",
          "readyForLoan": 0,
          "note": ""
        }, ...]
      },
      {
        "pid": "pid2",
        "holdingsitems": [...]
      },
        ...
      ]
    }
  ]
}
```

- Holdingsitems for hver pid er en liste af alle de beholdninger biblioteket har, som er matcher op imod den bibliographicRecordId som står efter : pid’en.
- værdien af holdingsitems er en tom liste hvis der ikke er beholdninger på den pid
- Hvis flere pid’er afleder samme bibliographicRecordId eg. pid=870970-basis:xxxx,700000-katalog:xxxx afføder det en 400 Bad Request. Dette er i praksis 2 forespørgsler imod samme beholdninger resulterende i redundante JSON noder (og potentielt meget store svar). Behovet for et gentaget svar opfattes et kilde problem, idet der er flere id’er som er overlappende.
