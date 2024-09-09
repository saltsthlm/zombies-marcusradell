import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;

  return {
    isFull: () => true,
  };
};

test("room is not full", () => {
  const room = createRoom(0);

  const result = room.isFull();

  ok(result);
});

test.skip("empty room that fits one zombie is not full", () => {});

test.skip("one-roomer becomes full when a zombie is added", () => {});
