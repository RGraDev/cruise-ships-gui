const { expect, describe, it } = require("@jest/globals");
const Port = require("../src/Port");

describe("constructor", function () {
  it("creates a new Port instance ", function () {
    expect(new Port("Southampton")).toBeInstanceOf(Object);
  });
});

describe("addShip", function () {
  it("add a ship to the ships property", function () {
    const port = new Port("Dover");
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
});

describe("removeShip", function() {
  const port = new Port("Dover");
  const titanic = {};
  const queenMary = {};

  port.addShip(titanic);
  port.addShip(queenMary);
  port.removeShip(titanic);

  expect(port.ships).toContain(queenMary);
});
