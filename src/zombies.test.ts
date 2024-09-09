import { deepEqual } from "node:assert/strict";
import { test } from "node:test";

test("deepEqual", () => {
  deepEqual({ a: 1 }, { a: 1 });
});
