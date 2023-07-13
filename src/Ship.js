class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.startingPort = itinerary.ports[0];
    this.currentPort = this.startingPort;
    this.previousPort = null;
  }

  setSail() {
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === this.itinerary.ports.length - 1) {
      throw new Error("You have reached the end of your itinerary");
    }

    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    this.currentPort = itinerary.ports[previousPortIndex + 1];
  }
}

module.exports = Ship;
