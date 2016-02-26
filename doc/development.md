In the beginning we work directly on the master branch (decided by the xp-team - lots of refactoring is happening at the moment, and it is easier for those new to github, etc.).
Later on this can change into using `ready/...`-branches

Quick notes about how to make changes:

```bash
git clone git@github.com:DBCDK/serviceprovider.git

# ... make local changes test and commit...
# `git add` the changes, and then 
git commit

git pull # sync from master branch on github
# ... merge conflicts, test and commit

git push  # sync to master branch on github
```

# Tests

The apitest `npm run apitest` sends a bunch of test-requests to the server, and diff the result with a previous result. The server has to be running during this.

There are also unit tests which is run with `npm test`, and linting, which is run by `npm run lint`, and `npm run lint:checkstyle`.

```
npm run test
npm run lint
npm run lint:checkstyle
```
