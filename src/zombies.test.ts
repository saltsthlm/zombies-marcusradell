import { deepEqual } from "node:assert";
import { ok } from "node:assert/strict";
import { test } from "node:test";

const createRoom = (capacity: number) => {
  const _capacity = capacity;
  let _zombies: string[] = [];

  return {
    isFull: () => {
      return _zombies.length === _capacity;
    },
    addZombie: (zombie: string) => {
      if (_capacity === 0) {
        return;
      }

      if (_zombies.length === _capacity) {
        _zombies.shift();
      }

      _zombies.push(zombie);
    },
    getZombies: () => _zombies,
  };
};

test("room is full", () => {
  const room = createRoom(0);

  const isRoomFull = room.isFull();

  ok(isRoomFull);
});

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1);

  const doesRoomHaveSpace = !room.isFull();

  ok(doesRoomHaveSpace);
});

test("empty room cannot fit any zombies", () => {
  const room = createRoom(0);

  room.addZombie("Earl");
  const zombies = room.getZombies();

  deepEqual(zombies, []);
});

test("one-roomer becomes full when a zombie is added", () => {
  const room = createRoom(1);

  room.addZombie("Zarah");
  const isRoomFull = room.isFull();

  ok(isRoomFull);
});

test("two-roomer is not full when a zombie is added", () => {
  const room = createRoom(2);

  room.addZombie("Tobie");
  const doesRoomHaveSpace = !room.isFull();

  ok(doesRoomHaveSpace);
});

test("second zombie consumes first zombie when added to a one-roomer", () => {
  const room = createRoom(1);

  room.addZombie("Zarah");
  room.addZombie("Earl");
  const zombies = room.getZombies();

  deepEqual(zombies, ["Earl"]);
});

// You are free to add more tests that you think are relevant!
