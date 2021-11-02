"use strict";

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

const keepFirst = (str) => str.slice(0, 2);
const keepLast = (str) => str.slice(str.length - 2);
const keepFirstLast = (str) => str.slice(2, 4);

//* Begin of tests
const assert = require("assert");
const { type } = require("os");

assert.strictEqual(typeof keepFirst, "function");
assert.strictEqual(keepFirst.length, 1);
assert.deepStrictEqual(keepFirst("ma string"), "ma");
assert.deepStrictEqual(keepFirst("ma"), "ma");

assert.strictEqual(typeof keepLast, "function");
assert.strictEqual(keepLast.length, 1);
assert.deepStrictEqual(keepLast("ma string"), "ng");
assert.deepStrictEqual(keepLast("ma"), "ma");

assert.strictEqual(typeof keepFirstLast, "function");
assert.strictEqual(keepFirstLast.length, 1);
assert.deepStrictEqual(keepFirstLast("ma string"), " s");
assert.deepStrictEqual(keepFirstLast("string"), "ri");

// assert.fail('You must write your own tests');
// End of tests */
