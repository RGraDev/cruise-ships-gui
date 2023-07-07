const { expect, describe, it } = require("@jest/globals");
const Ship = require("../src/Ship");

describe("constructor", function () {
  it("instantiates a Ship object ", function () {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", function () {
    expect(new Ship("Southampton").startingPort).toBe("Southampton");
  });
});
