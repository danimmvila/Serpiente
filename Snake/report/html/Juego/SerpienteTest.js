var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":63,"id":1841,"methods":[{"el":17,"sc":2,"sl":14},{"el":32,"sc":2,"sl":19},{"el":37,"sc":2,"sl":34},{"el":46,"sc":2,"sl":39},{"el":55,"sc":2,"sl":48},{"el":62,"sc":2,"sl":57}],"name":"SerpienteTest","sl":8}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_162":{"methods":[{"sl":14}],"name":"testSerpiente","pass":true,"statements":[{"sl":16}]},"test_44":{"methods":[{"sl":48}],"name":"testSetDireccion","pass":true,"statements":[{"sl":50},{"sl":51},{"sl":52},{"sl":53},{"sl":54}]},"test_51":{"methods":[{"sl":19}],"name":"testAvance","pass":true,"statements":[{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":25},{"sl":26},{"sl":27},{"sl":28},{"sl":29},{"sl":30},{"sl":31}]},"test_69":{"methods":[{"sl":39}],"name":"testGetDireccion","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":44},{"sl":45}]},"test_92":{"methods":[{"sl":57}],"name":"testGetCuerpo","pass":true,"statements":[{"sl":59},{"sl":60},{"sl":61}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = $jsonSrcFileLines
