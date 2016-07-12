# nunjucks async extension bug test case

nunjucks fails somehow unter certain conditions when using async extensions

desired output:
```
    1. before include
    2. start test
    3. end test
    4. after include
```


actual output:
```
    1. before include
```

the test fails only if the following conditions are met:
- the extnesion must be called from within an included file
- the included file must be included within a if statement
- the extension must not call the callback immediately