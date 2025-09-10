import { describe, it } from "node:test";
import assert from "node:assert";

describe("Math operations", () => {

    it("addition works", () => {
      assert.strictEqual(2 + 2, 4);
    });

    it("subtraction works", () => {
      assert.strictEqual(5 - 2, 3);
    });

    it("this one fails", () => {
      assert.strictEqual(2 * 2, 5);
    });

    it.skip("skipped test", () => {
      assert.ok(false);
    });

});
