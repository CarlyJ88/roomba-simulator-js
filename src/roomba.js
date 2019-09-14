class Roomba {
  constructor(position, room) {
    this.position = position;
    this.room = room;
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
    return this.position;
  }
}