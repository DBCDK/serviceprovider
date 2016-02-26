# Pull requests

Pull requests should be made towards `ready/...` branches, which will then be merged into the `master` branch by the integration server, when the tests passes.

The tests run by the integration server before merging are:

```
npm run test
npm run lint
npm run lint:checkstyle
```

(after `npm run install`, `npm run build`)
