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
      this.position.y += 1;
    } else {
      this.position.x += 1;
    }
    return this.position;
  }
}