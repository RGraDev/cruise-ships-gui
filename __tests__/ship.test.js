const { expect, describe, it, beforeEach } = require("@jest/globals");
const Ship = require("../src/Ship");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("Ship", () => {
  describe("with ports and itinerary", () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      dover = new Port("Dover");
      calais = new Port("Calais");
      itinerary = new Itinerary([dover, calais]);
      ship = new Ship(itinerary);
    });
    it("Should set sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.ships).not.toContain(ship);
    });
    it("Instantiates a Ship object", () => {
      expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
      expect(new Ship(itinerary).currentPort).toBe(dover);
    });
    it("Should add ship to starting port on instantiation", () => {
      expect(dover.ships).toContain(ship);
    });
    it("Can dock at a different port", () => {
      expect(ship.currentPort).toBe(dover);
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(calais);
      expect(() => ship.setSail()).toThrow(
        "You have reached the end of your itinerary",
      );
    });
  });
});
