"use strict";

const Dice = require("../dice");

describe("create a dice with no upper bound given", () => {
  const dice = new Dice();

  test("maximumValue is 6", () => {
    expect(dice.maximumValue).toBe(6);
  });

  test("minimumValue is 1", () => {
    expect(dice.minimumValue).toBe(1);
  });

  test("dots is 0", () => {
    expect(dice.dots).toBe(0);
  });
});

describe("create a dice with upper bound 2 - 20", () => {
  const testValues = new Array(19)
    .fill(2)
    .map((value, index) => [value + index]);

  test.each(testValues)("test upper bound %s", (ubound) => {
    const dice = new Dice(ubound);

    expect(dice.maximumValue).toBe(ubound);
    expect(dice.minimumValue).toBe(1);
    expect(dice.dots).toBe(0);
  });
});

describe("test the exceptions", () => {
  const testValues = [
    [0, "upper bound is too small"],
    [1, "upper bound is too small"],
    [-1, "upper bound is too small"],
    [-10, "upper bound is too small"],
    [21, "upper bound is too big"],
    ["a", "upper bound must be an integer"],
    ["1", "upper bound must be an integer"],
    [2.5, "upper bound must be an integer"],
  ];

  test.each(testValues)("upper bound %s throws %s", (ubound, text) => {
    expect(() => new Dice(ubound)).toThrow(text);
  });
});

describe("test the roll", () => {
  test("create dice with no upper bound", () => {
    const dice = new Dice();
    dice.roll();
    expect(dice.dots).toBeGreaterThanOrEqual(1);
    expect(dice.dots).toBeLessThanOrEqual(6);
  });

  test("create dice with upper bound 20", () => {
    const dice = new Dice(20);
    dice.roll();
    expect(dice.dots).toBeGreaterThanOrEqual(1);
    expect(dice.dots).toBeLessThanOrEqual(20);
  });
});

describe("test to String", () => {
  let dice;

  beforeEach(() => {
    dice = new Dice();
  });

  test("dice rolled", () => {
    dice.roll();
    expect(dice.toString()).toBe(`${dice.dots}`);
  });

  test("dice not rolled", () => {
    expect(dice.toString()).toBe("Not rolled yet");
  });
});

describe("Test roll with distribution test", () => {
  describe("create dice with no upper bound given", () => {
    const dice = new Dice();
    const dotCounts = [];
    for (let i = 0; i < 10; i++) {
      test("when rolled", () => {
        dice.roll();
        expect(dice.dots).toBeGreaterThanOrEqual(1);
        expect(dice.dots).toBeLessThanOrEqual(6);
      });
    }
    test("dot distribution ok", () => {
      for (let i = 0; i < 100; i++) {
        dice.roll();
        dotCounts.push(dice.dots);
      }
      expect(new Set(dotCounts).size === 6).toBe(true);
    });
  });

  describe("create dice with upper bound 20", () => {
    const dice = new Dice(20);
    const dotCounts = [];

    test("dot distribution ok", () => {
      for (let i = 0; i < 500; i++) {
        dice.roll();
        dotCounts.push(dice.dots);
      }
      expect(new Set(dotCounts).size === 20).toBe(true);
    });
  });
});
