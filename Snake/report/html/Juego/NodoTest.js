var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":318,"methods":[{"el":18,"sc":2,"sl":12},{"el":24,"sc":2,"sl":20},{"el":30,"sc":2,"sl":26}],"name":"NodoTest","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_114":{"methods":[{"sl":20}],"name":"testGetRow","pass":true,"statements":[{"sl":22},{"sl":23}]},"test_115":{"methods":[{"sl":12}],"name":"testNodo","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":16},{"sl":17}]},"test_142":{"methods":[{"sl":26}],"name":"testGetCol","pass":true,"statements":[{"sl":28},{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = $jsonSrcFileLines
