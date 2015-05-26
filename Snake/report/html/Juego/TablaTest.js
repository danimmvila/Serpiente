var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":55,"id":1222,"methods":[{"el":15,"sc":2,"sl":12},{"el":22,"sc":2,"sl":17},{"el":27,"sc":2,"sl":24},{"el":34,"sc":2,"sl":29},{"el":41,"sc":2,"sl":36},{"el":46,"sc":2,"sl":43},{"el":54,"sc":2,"sl":48}],"name":"TablaTest","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":17}],"name":"testInit","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21}]},"test_112":{"methods":[{"sl":24}],"name":"testNewFood","pass":true,"statements":[{"sl":26}]},"test_126":{"methods":[{"sl":17}],"name":"testInit","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21}]},"test_141":{"methods":[{"sl":43}],"name":"testIsGameOver","pass":true,"statements":[{"sl":45}]},"test_161":{"methods":[{"sl":48}],"name":"testSetGameOver","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53}]},"test_163":{"methods":[{"sl":36}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":38}]},"test_172":{"methods":[{"sl":36}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":38}]},"test_3":{"methods":[{"sl":24}],"name":"testNewFood","pass":true,"statements":[{"sl":26}]},"test_49":{"methods":[{"sl":43}],"name":"testIsGameOver","pass":false,"statements":[{"sl":45}]},"test_5":{"methods":[{"sl":12}],"name":"testTabla","pass":true,"statements":[{"sl":14}]},"test_64":{"methods":[{"sl":12}],"name":"testTabla","pass":true,"statements":[{"sl":14}]},"test_67":{"methods":[{"sl":48}],"name":"testSetGameOver","pass":false,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53}]},"test_72":{"methods":[{"sl":29}],"name":"testIsFood","pass":true,"statements":[{"sl":31}]},"test_84":{"methods":[{"sl":29}],"name":"testIsFood","pass":true,"statements":[{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = $jsonSrcFileLines
