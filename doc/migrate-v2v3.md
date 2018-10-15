Ændringer i Den Åbne Platforms API, som man skal være opmærksom på, ved migrering af kode fra at bruge version 2 til at bruger version 3:

- Nyt `/suggest`-endpoint, der erstatter den gamle `/suggest`-endpoint.
- Nyt `/recommend`endpoint, der erstatter det gamle `/recommend`-endpoint. `/rank`-endpointet forsvinder samtidigt
- `/order`-endpointets `orderId` er blevet splittet op i `orderId` og `orderType`, og man skal give begge parametre med, når man ændre på bestillinger.
- `/order`-endpointets `library`, biblioteket som man bestiller bogen til, har ændret navn til `pickUpBranch`
- `/availability` - tager nu en liste af pid'er `pids` som parameter i stedet for et enkelt `pid`, og returnerer derfor også en liste
- `/user`-endpointet returnerer flere informationer.
- nyt `/status`-endpoint med status og performancestatistik for DÅP

