module.exports = class Room {
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
  } // check and update test and only commit this after commiting other stuff same goes for inout files
}