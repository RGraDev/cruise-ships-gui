const { expect, describe, it, beforeEach } = require("@jest/globals");
const Ship = require("../src/Ship");
require("../src/Itinerary");
describe("Ship", () => {
  describe("with ports and itinerary", () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Dover",
        ships: [],
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Calais",
        ships: [],
      };

      itinerary = {
        ports: [dover, calais],
      };

      ship = new Ship(itinerary);
    });

    it("Should set sail", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });
    it("Instantiates a Ship object", () => {
      expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });
    it("has a starting port", () => {
      expect(new Ship(itinerary).currentPort).toBe(dover);
    });
    it("Should add ship to starting port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
    it("Can dock at a different port", () => {
      ship.setSail();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
      ship.dock();
      expect(calais.addShip).toHaveBeenCalledWith(ship);
      expect(() => ship.setSail()).toThrow(
        "You have reached the end of your itinerary",
      );
    });
  });
});
