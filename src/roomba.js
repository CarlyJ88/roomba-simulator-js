class Roomba {
  constructor(position, room) {
    this.position = position;
    this.room = room;
    this.collected_dirt = 0
    // console.log(this)
  }

  currentPosition() {
    return this.position
  }

  move(directions) {
    if (directions === 'N') {
      this.position.y < this.room.dimensions().y ? this.position.y += 1 : this.position;
    } 
    else if (directions === 'E') {
      this.position.x < this.room.dimensions().x ? this.position.x += 1 : this.position;
    } else if (directions === 'S') {
       this.position.y > 0 ? this.position.y -= 1 : this.position;
    } else {
      this.position.x > 0 ? this.position.x -= 1 : this.position;
    }
    this.room.available_dirt.forEach((dirt) => {
     this.position.x === dirt.x && this.position.y === dirt.y ? this.collected_dirt += 1 : this.collected_dirt;
     console.log(this.collected_dirt);
    })
    // console.log(this);
    return this.position;
  }

  collectedDirt() {
    return this.collected_dirt;
  }
}