class Roomba {
  constructor(position, room) {
    this.position = position;
    this.room = room;
  }

  currentPosition() {
    return this.position
  }

  move(direction) {
    console.log(this.position.y);
    this.position.y += 1;
    return this.position;
  }
}