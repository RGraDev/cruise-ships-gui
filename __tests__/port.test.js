const { expect, describe, it } = require("@jest/globals");
const Port = require("../src/Port");

describe("constructor", function () {
  it("creates a new Port instance ", function () {
    expect(new Port("Southampton")).toBeInstanceOf(Object);
  });
});
