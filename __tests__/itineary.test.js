const { expect, describe, it } = require("@jest/globals");
const Itinerary = require("../src/Itinerary");

describe("constructor", function () {
  it("creates a new Itinerary instance ", function () {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it("should have a ports property", function () {
    expect(new Itinerary()).toHaveProperty("ports");
  });
});
