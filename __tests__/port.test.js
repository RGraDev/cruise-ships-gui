const { expect, describe, it, beforeEach } = require("@jest/globals");
const Port = require("../src/Port");

describe("Port", () => {
  describe("constructor", function () {
    it("creates a new Port instance ", function () {
      expect(new Port("Southampton")).toBeInstanceOf(Object);
    });
  });
  describe("with ports and ships", () => {
    let dover;
    let ship;
    let titanic;
    let queenMary;

    beforeEach(() => {
      dover = new Port("Dover");
      ship = {};
      titanic = {};
      queenMary = {};
    });
    it("adds a ship to the ships property", function () {
      dover.addShip(ship);
      expect(dover.ships).toContain(ship);
    });
    it("removes a ship from the ships property", () => {
      dover.addShip(titanic);
      dover.addShip(queenMary);
      dover.removeShip(titanic);
      expect(dover.ships).toContain(queenMary);
    });
  });
});
