"use strict";

/*
 * Create a `repeat` function that takes a string and a number as parameters
 * and return the repeated string by the given number, like this method does:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
 * Of course you may not use the method directly
 */

// Your code:

const repeat = (str, number) => {
  let concatStr = "";
  for (let i = 0; i < number; i++) {
    concatStr += str;
  }
  return concatStr;
};

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof repeat, "function");
assert.strictEqual(repeat.length, 2);
assert.strictEqual(repeat.toString().includes(".repeat"), false);
assert.strictEqual(repeat("a", 3), "aaa");
assert.strictEqual(repeat("ba", 10), "babababababababababa");
assert.strictEqual(repeat("pouet", 2), "pouetpouet");
assert.strictEqual(repeat("haha", 1), "haha");
assert.strictEqual(repeat("hehehe", 0), "");
// End of tests */
