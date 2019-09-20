class Room {
  constructor(dimension) {
    this.dimension = dimension;
    this.available_dirt = []
  }

  dimensions() {
    return this.dimension;
  }

  addDirt(dirt) {
    this.available_dirt.push(dirt);
    return this.available_dirt;
  }

  availableDirt() {
    return this.available_dirt;
  }
}

export default Room;
