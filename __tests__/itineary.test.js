const { expect, describe, it } = require("@jest/globals");
const Itinerary = require("../src/Itinerary");

describe("constructor", function () {
  it("creates a new Itinerary instance ", function () {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it("should have a ports property", function () {
    expect(new Itinerary()).toHaveProperty("ports");
  });
  it("can have ports", () => {
    const dover = jest.fn();
    const calais = jest.fn();
    const itinerary = new Itinerary(dover, calais);
    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
