"use strict";

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

const cutFirst = (str) => str.slice(2);
const cutLast = (str) => str.slice(0, str.length - 2);
const cutFirstLast = (str) => str.slice(2, str.length - 2);

//* Begin of tests
const assert = require("assert");

assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(cutFirst.length, 1);
assert.deepStrictEqual(cutFirst("ma string"), " string");
assert.deepStrictEqual(cutFirst("ma"), "");

assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(cutLast.length, 1);
assert.deepStrictEqual(cutLast("ma string"), "ma stri");
assert.deepStrictEqual(cutLast("ma"), "");

assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirstLast("ma string"), " stri");
assert.deepStrictEqual(cutFirstLast("ma s"), "");

// assert.fail('You must write your own tests');
// End of tests */
