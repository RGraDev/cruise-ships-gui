const { expect, describe, it } = require("@jest/globals");
const Ship = require("../src/Ship");
const Port = require("../src/Port");

describe("constructor", function () {
  it("instantiates a Ship object ", function () {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it("has a starting port", function () {
    expect(new Ship(Port).startingPort).toBe(Port);
  });
});

describe("setSail", function () {
  it("should set sail", function () {
    const ship = new Ship(Port);
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});

describe("dock", function () {
  it("can dock at a different port", function () {
    const dover = new Port("Dover");
    const ship = new Ship(dover);

    const calais = new Port("Calais");
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
