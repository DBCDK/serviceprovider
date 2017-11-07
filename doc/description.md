Dette er den åbne platform, hvilket er APIet for de danske biblioteker.

### Få adgang til API'et
Man skal være et dansk bibliotek, eller DDB, for at få API-adgang. Andre må sende forespørgslen gennem en af disse. <br>
Forespørgslen sendes til DBCs kundeservice (https://kundeservice.dbc.dk/) med følgende informationer:

- Projektejer kontaktperson (bibliotek, email, telefon)
- Teknisk kontaktperson (navn, email, telefon)
- Navn/beskrivelse af app/klient
- Eventuelt søge-profil (per default er dette det indloggede bibliotek. Alternative søgeprofiler kan være landsdækkende, såsom bibliotek.dk og biblo.dk)

Herefter vil biblioteket modtage et eller flere `CLIENT_ID` / `CLIENT_SECRET`, der kan bruges til at få adgang til APIet. 

###Tokens
Alle kald til API'et kræver en gyldig token. Der findes tre forskellige typer tokens. 

Tokens til driftmiljø'et hentes fra https://auth.dbc.dk som beskrevet i eksemplerne herunder. Tokens til stagingmiljø'et hentes fra https://auth-stg.dbc.dk.

####Anonym
Kan benyttes til alle forespørgsler som ikke indeholder biblioteks- eller brugerspecifikke data: 

  `curl --user "$CLIENT_ID":"$CLIENT_SECRET" -X POST https://auth.dbc.dk/oauth/token -d 'grant_type=password&username=@&password=@'`

####Biblioteksspecifik
Ønskes forespørgsler afgrænset til et specifik bibliotek, kan man generere en biblioteksspecifik token. F.eks. hvis man ønsker at afgrænse en søgning til
et specifikt biblioteksvæsens beholdning:

  `curl --user "$CLIENT_ID":"$CLIENT_SECRET" -X POST https://auth.dbc.dk/oauth/token -d 'grant_type=password&username=@$LIBRARY_ID&password=@$LIBRARY_ID'`

`LIBRARY_ID` er et biblioteks ISIL nummer f.eks. 710100 for København.

####Autentificeret
Endpoints som kræver en indlogget bruger skal kaldes med et autentificeret token. Dette gælder /order og /status. 

  `curl --user "$CLIENT_ID":"$CLIENT_SECRET" -X POST https://auth.dbc.dk/oauth/token -d 'grant_type=password&username=$USER_ID@LIBRARY_ID&password=$PINCODE'`

### Supplerende dokumentation
Kildekode, issue tracking, osv. findes på github: https://github.com/dbcdk/serviceprovider/,
Her finder man også specifikationer, ogyderligere dokumentation [doc/](https://github.com/DBCDK/serviceprovider/tree/master/doc/).
Eksempelforespørgsler, og en "getting started guide" er tilgængelig her: [example.html](example.html) [guide.html](guide.html).

Dokumentation til community forespørgslerne kan findes på [/doc/community](https://github.com/DBCDK/serviceprovider/tree/master/doc/community) 

###English

This is the Open Platform, which is the API for the danish public libraries.

Danish libraries can get access directly from DBC, see the description in danish above. Others have to go through a library to get access.
