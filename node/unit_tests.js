const assert = require ('node:assert');
const test= require ('node:test');
test ('my first test' , (t)=> {
 assert.strictEqual(4,2+2);
});

test('e count in string', (s) => {
  const word = "shecodes";
  const result = word.split('').filter(char => char === 'e').length;
  assert.strictEqual(result, 2);
});

test('empty list length is 0', (t) => {
const emptyArray = [];
const result = emptyArray.length;
 assert.strictEqual(result, 0);
});

test('numbers list does not contain null', (t) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = numbers.includes(null);
  assert.strictEqual(result, false);
});


