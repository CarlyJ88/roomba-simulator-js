class Room {
  constructor (dimension) {
    this.dimension = dimension
    this.available_dirt = []
  }

  dimensions () {
    return this.dimension
  }

  addDirt (dirt) {
    this.available_dirt.push(dirt)
    return this.available_dirt
  }

  availableDirt () {
    return this.available_dirt
  }

  isInTheRoom(position) {
    return position.x >= 0 && position.x <= this.dimension.x 
    && position.y >= 0 && position.y <= this.dimension.x
  }
}

export default Room
