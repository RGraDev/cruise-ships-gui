const { expect, describe, it } = require("@jest/globals");
const Ship = require("../src/Ship");
const Port = require("../src/Port");
const Itinerary = require("../src/Itinerary");

describe("constructor", function () {
  it("instantiates a Ship object ", function () {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });
  it("has a starting port", function () {
    const itinerary = new Itinerary(["Dover", "Calais"]);
    expect(new Ship(itinerary).startingPort).toBe("Dover");
  });
});

describe("setSail", function () {
  it("should set sail", function () {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe("dock", function () {
  it("can dock at a different port", function () {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    const itinerary = new Itinerary([dover, calais]);

    const ship = new Ship(itinerary);
    expect(ship.startingPort).toBe(dover);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(() => ship.setSail()).toThrow(
      "You have reached the end of your itinerary",
    );
  });
});
