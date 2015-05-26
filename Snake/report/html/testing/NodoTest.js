var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":34,"id":2057,"methods":[{"el":20,"sc":2,"sl":14},{"el":26,"sc":2,"sl":22},{"el":32,"sc":2,"sl":28}],"name":"NodoTest","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_13":{"methods":[{"sl":14}],"name":"testNodo","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":18},{"sl":19}]},"test_177":{"methods":[{"sl":22}],"name":"testGetRow","pass":true,"statements":[{"sl":24},{"sl":25}]},"test_182":{"methods":[{"sl":28}],"name":"testGetCol","pass":true,"statements":[{"sl":30},{"sl":31}]},"test_189":{"methods":[{"sl":14}],"name":"testNodo","pass":true,"statements":[{"sl":16},{"sl":17},{"sl":18},{"sl":19}]},"test_192":{"methods":[{"sl":28}],"name":"testGetCol","pass":true,"statements":[{"sl":30},{"sl":31}]},"test_198":{"methods":[{"sl":22}],"name":"testGetRow","pass":true,"statements":[{"sl":24},{"sl":25}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [13, 189], [], [13, 189], [13, 189], [13, 189], [13, 189], [], [], [177, 198], [], [177, 198], [177, 198], [], [], [192, 182], [], [192, 182], [192, 182], [], [], []]
