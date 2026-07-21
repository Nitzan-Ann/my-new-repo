const bigInt = require('big-integer');

const num = bigInt(5);
console.log(num.toString(10, 'ABCDEFGHIJKLMNOP'));
