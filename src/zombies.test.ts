import { fail } from "node:assert";
import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = () => {
  return {
    isFull: () => false,
  };
};

test("room is not full", () => {
  const room = createRoom();

  const result = room.isFull();

  ok(!result);
});
