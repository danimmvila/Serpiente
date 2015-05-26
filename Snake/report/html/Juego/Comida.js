var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":49,"id":380,"methods":[{"el":25,"sc":2,"sl":16},{"el":32,"sc":2,"sl":30},{"el":40,"sc":2,"sl":38},{"el":48,"sc":2,"sl":46}],"name":"Comida","sl":3}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_107":{"methods":[{"sl":16},{"sl":30}],"name":"testInit","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_108":{"methods":[{"sl":38}],"name":"testGetFila","pass":true,"statements":[{"sl":39}]},"test_110":{"methods":[{"sl":38},{"sl":46}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_116":{"methods":[{"sl":16},{"sl":30}],"name":"testInit","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":31}]},"test_12":{"methods":[{"sl":38}],"name":"testAvance","pass":false,"statements":[{"sl":39}]},"test_125":{"methods":[{"sl":38}],"name":"testAvance","pass":true,"statements":[{"sl":39}]},"test_126":{"methods":[{"sl":16},{"sl":30}],"name":"testInit","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":31}]},"test_132":{"methods":[{"sl":16}],"name":"testComida","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23}]},"test_137":{"methods":[{"sl":16},{"sl":30}],"name":"testInit","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_138":{"methods":[{"sl":38}],"name":"testGetFila","pass":true,"statements":[{"sl":39}]},"test_145":{"methods":[{"sl":16},{"sl":30}],"name":"testInit","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_146":{"methods":[{"sl":38}],"name":"testAvance","pass":true,"statements":[{"sl":39}]},"test_15":{"methods":[{"sl":38},{"sl":46}],"name":"testIsFood","pass":false,"statements":[{"sl":39},{"sl":47}]},"test_151":{"methods":[{"sl":16},{"sl":30}],"name":"testSetGameOver","pass":false,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_153":{"methods":[{"sl":38}],"name":"testAvance","pass":false,"statements":[{"sl":39}]},"test_155":{"methods":[{"sl":38},{"sl":46}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_161":{"methods":[{"sl":16},{"sl":30}],"name":"testSetGameOver","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_163":{"methods":[{"sl":38},{"sl":46}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_167":{"methods":[{"sl":46}],"name":"testGetCol","pass":true,"statements":[{"sl":47}]},"test_169":{"methods":[{"sl":16},{"sl":30}],"name":"testSetGameOver","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_172":{"methods":[{"sl":38},{"sl":46}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_175":{"methods":[{"sl":38}],"name":"testAvance","pass":false,"statements":[{"sl":39}]},"test_179":{"methods":[{"sl":16},{"sl":30}],"name":"testSetGameOver","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":31}]},"test_180":{"methods":[{"sl":38},{"sl":46}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_184":{"methods":[{"sl":38},{"sl":46}],"name":"testIsFood","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_186":{"methods":[{"sl":38}],"name":"testAvance","pass":false,"statements":[{"sl":39}]},"test_188":{"methods":[{"sl":46}],"name":"testGetCol","pass":true,"statements":[{"sl":47}]},"test_19":{"methods":[{"sl":16}],"name":"testComida","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":23}]},"test_196":{"methods":[{"sl":46}],"name":"testGetCol","pass":true,"statements":[{"sl":47}]},"test_199":{"methods":[{"sl":16},{"sl":30}],"name":"testInit","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":21},{"sl":31}]},"test_20":{"methods":[{"sl":38}],"name":"testGetFila","pass":true,"statements":[{"sl":39}]},"test_26":{"methods":[{"sl":16}],"name":"testComida","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23}]},"test_31":{"methods":[{"sl":16},{"sl":30}],"name":"testSetGameOver","pass":false,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_46":{"methods":[{"sl":38}],"name":"testAvance","pass":true,"statements":[{"sl":39}]},"test_51":{"methods":[{"sl":38}],"name":"testAvance","pass":true,"statements":[{"sl":39}]},"test_53":{"methods":[{"sl":38},{"sl":46}],"name":"testIsSerpiente","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_67":{"methods":[{"sl":16},{"sl":30}],"name":"testSetGameOver","pass":false,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_70":{"methods":[{"sl":16},{"sl":30}],"name":"testInit","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]},"test_72":{"methods":[{"sl":38},{"sl":46}],"name":"testIsFood","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_73":{"methods":[{"sl":38},{"sl":46}],"name":"testIsFood","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_77":{"methods":[{"sl":38}],"name":"testAvance","pass":true,"statements":[{"sl":39}]},"test_80":{"methods":[{"sl":38},{"sl":46}],"name":"testIsFood","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_84":{"methods":[{"sl":38},{"sl":46}],"name":"testIsFood","pass":true,"statements":[{"sl":39},{"sl":47}]},"test_87":{"methods":[{"sl":38}],"name":"testAvance","pass":false,"statements":[{"sl":39}]},"test_91":{"methods":[{"sl":38}],"name":"testAvance","pass":false,"statements":[{"sl":39}]},"test_97":{"methods":[{"sl":16},{"sl":30}],"name":"testTabla","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":19},{"sl":20},{"sl":23},{"sl":31}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [161, 199, 116, 126, 31, 145, 70, 179, 137, 107, 151, 132, 67, 97, 19, 26, 169], [161, 199, 116, 126, 31, 145, 70, 179, 137, 107, 151, 132, 67, 97, 19, 26, 169], [161, 199, 116, 126, 31, 145, 70, 179, 137, 107, 151, 132, 67, 97, 19, 26, 169], [161, 199, 116, 126, 31, 145, 70, 179, 137, 107, 151, 132, 67, 97, 19, 26, 169], [161, 199, 116, 126, 31, 145, 70, 179, 137, 107, 151, 132, 67, 97, 19, 26, 169], [199, 116, 126, 179, 19], [], [161, 31, 145, 70, 137, 107, 151, 132, 67, 97, 19, 26, 169], [], [], [], [], [], [], [161, 199, 116, 126, 31, 145, 70, 179, 137, 107, 151, 67, 97, 169], [161, 199, 116, 126, 31, 145, 70, 179, 137, 107, 151, 67, 97, 169], [], [], [], [], [], [], [77, 138, 15, 12, 84, 110, 186, 53, 153, 73, 46, 155, 163, 184, 172, 146, 72, 91, 51, 20, 180, 80, 108, 125, 175, 87], [77, 138, 15, 12, 84, 110, 186, 53, 153, 73, 46, 155, 163, 184, 172, 146, 72, 91, 51, 20, 180, 80, 108, 125, 175, 87], [], [], [], [], [], [], [15, 84, 110, 53, 167, 73, 155, 196, 163, 184, 172, 188, 72, 180, 80], [15, 84, 110, 53, 167, 73, 155, 196, 163, 184, 172, 188, 72, 180, 80], [], []]
