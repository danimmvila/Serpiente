var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":329,"methods":[{"el":16,"sc":2,"sl":13},{"el":23,"sc":2,"sl":21},{"el":31,"sc":2,"sl":29}],"name":"Nodo","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testInit","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_110":{"methods":[{"sl":21}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":22}]},"test_114":{"methods":[{"sl":21}],"name":"testGetRow","pass":true,"statements":[{"sl":22}]},"test_115":{"methods":[{"sl":13}],"name":"testNodo","pass":true,"statements":[{"sl":14},{"sl":15}]},"test_116":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testInit","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_12":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_125":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_126":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testInit","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_13":{"methods":[{"sl":13}],"name":"testNodo","pass":true,"statements":[{"sl":14},{"sl":15}]},"test_137":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testInit","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_142":{"methods":[{"sl":29}],"name":"testGetCol","pass":true,"statements":[{"sl":30}]},"test_145":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testInit","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_146":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_15":{"methods":[{"sl":21}],"name":"testIsFood","pass":false,"statements":[{"sl":22}]},"test_151":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testSetGameOver","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_153":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_155":{"methods":[{"sl":21}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":22}]},"test_157":{"methods":[{"sl":21}],"name":"testAvance","pass":true,"statements":[{"sl":22}]},"test_161":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testSetGameOver","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_163":{"methods":[{"sl":21}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":22}]},"test_169":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testSetGameOver","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_172":{"methods":[{"sl":21}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":22}]},"test_175":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_177":{"methods":[{"sl":21}],"name":"testGetRow","pass":true,"statements":[{"sl":22}]},"test_179":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testSetGameOver","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_180":{"methods":[{"sl":21}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":22}]},"test_182":{"methods":[{"sl":29}],"name":"testGetCol","pass":true,"statements":[{"sl":30}]},"test_186":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_189":{"methods":[{"sl":13}],"name":"testNodo","pass":true,"statements":[{"sl":14},{"sl":15}]},"test_191":{"methods":[{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":30}]},"test_192":{"methods":[{"sl":29}],"name":"testGetCol","pass":true,"statements":[{"sl":30}]},"test_198":{"methods":[{"sl":21}],"name":"testGetRow","pass":true,"statements":[{"sl":22}]},"test_199":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testInit","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_31":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testSetGameOver","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_33":{"methods":[{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":30}]},"test_46":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_51":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_53":{"methods":[{"sl":21}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":22}]},"test_56":{"methods":[{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":30}]},"test_60":{"methods":[{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":30}]},"test_67":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testSetGameOver","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_70":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testInit","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_77":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_87":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_91":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]},"test_96":{"methods":[{"sl":29}],"name":"testAvance","pass":false,"statements":[{"sl":30}]},"test_97":{"methods":[{"sl":13},{"sl":21},{"sl":29}],"name":"testTabla","pass":true,"statements":[{"sl":14},{"sl":15},{"sl":22},{"sl":30}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [161, 77, 12, 199, 116, 126, 31, 186, 13, 145, 153, 70, 179, 46, 146, 115, 137, 107, 91, 151, 189, 51, 67, 97, 125, 175, 169, 87], [161, 77, 12, 199, 116, 126, 31, 186, 13, 145, 153, 70, 179, 46, 146, 115, 137, 107, 91, 151, 189, 51, 67, 97, 125, 175, 169, 87], [161, 77, 12, 199, 116, 126, 31, 186, 13, 145, 153, 70, 179, 46, 146, 115, 137, 107, 91, 151, 189, 51, 67, 97, 125, 175, 169, 87], [], [], [], [], [], [161, 77, 15, 12, 199, 116, 126, 31, 198, 110, 186, 53, 145, 153, 177, 70, 179, 46, 155, 163, 172, 146, 137, 107, 91, 151, 51, 180, 114, 67, 97, 125, 175, 169, 87, 157], [161, 77, 15, 12, 199, 116, 126, 31, 198, 110, 186, 53, 145, 153, 177, 70, 179, 46, 155, 163, 172, 146, 137, 107, 91, 151, 51, 180, 114, 67, 97, 125, 175, 169, 87, 157], [], [], [], [], [], [], [33, 161, 77, 192, 12, 182, 199, 116, 126, 31, 186, 60, 145, 153, 70, 179, 46, 96, 146, 56, 137, 107, 91, 151, 51, 67, 142, 191, 97, 125, 175, 169, 87], [33, 161, 77, 192, 12, 182, 199, 116, 126, 31, 186, 60, 145, 153, 70, 179, 46, 96, 146, 56, 137, 107, 91, 151, 51, 67, 142, 191, 97, 125, 175, 169, 87], [], []]
