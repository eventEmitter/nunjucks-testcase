# nunjucks async extension bug test case

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/nunjucks-testcase.svg)](https://greenkeeper.io/)

nunjucks fails somehow unter certain conditions when using async extensions

expected output:
```
    1. before include
    2. start extension call
    3. end extension call
    4. after include
```


actual output:
```
    1. before include
```

the test fails only if the following conditions are met:
- the extension must be called from within an included file
- the included file must be included within a if statement
- the extension must not call the callback immediately


## Setup

1. npm i
2. node tests.js