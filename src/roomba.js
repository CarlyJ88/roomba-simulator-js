class Roomba {
  constructor (position, room) {
    this.position = position
    this.room = room
    this.collected_dirt = 0
  }

  currentPosition () {
    return this.position
  }

  move (directions) {
    const position = {...this.position}
    if (directions === 'N') {
      position.y += 1
    } else if (directions === 'E') {
      position.x += 1
    } else if (directions === 'S') {
      position.y -= 1
    } else {
      position.x -= 1
    }
    if(this.room.isInTheRoom(position)){
      this.position = position;
    }
    this._howMuchDirt(this.position)
    return this.position
  }

  collectedDirt () {
    return this.collected_dirt
  }

  _howMuchDirt (position) {
    var cleaingDirt = this.room.availableDirt().find((dirt) => {
      return this._isOnDirt(position.x, position.y, dirt.x, dirt.y)
    })
    if (cleaingDirt) {
      this.collected_dirt++
      var dirtIndex = this.room.availableDirt().indexOf(cleaingDirt)
      this.room.availableDirt().splice(dirtIndex, 1)
    }
  }

  _isOnDirt (positionx, positiony, dirtx, dirty) {
    return positionx === dirtx && positiony === dirty
  }
}

export default Roomba
