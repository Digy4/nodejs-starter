import test from "node:test";
import assert from "node:assert";

test("addition works", () => {
  assert.strictEqual(2 + 2, 4);
});

test("subtraction works", () => {
  assert.strictEqual(5 - 2, 3);
});

test("this one fails", () => {
  assert.strictEqual(2 * 2, 5);
});

test.skip("skipped test", () => {
  assert.ok(false);
});
