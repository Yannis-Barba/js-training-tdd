"use strict";

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const whisper = (str) => "*" + str.toLowerCase() + "*";

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof whisper, "function");
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper("MA STRING"), "*ma string*");
assert.deepStrictEqual(whisper("Ma String"), "*ma string*");
assert.deepStrictEqual(whisper("ma string"), "*ma string*");
assert.deepStrictEqual(whisper(" "), "* *");

// assert.fail('You must write your own tests');
// End of tests */
