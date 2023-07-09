class Ship {
  currentPort;
  constructor(startingPort) {
    this.startingPort = startingPort;
  }

  setSail() {
    this.currentPort = null;
  }

  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;
