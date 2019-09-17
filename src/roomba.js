module.exports = class Roomba {
  constructor(position, room) {
    this.position = position;
    this.room = room;
    this.collected_dirt = 0
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
    var cleaingDirt = this.room.availableDirt().find((dirt) => {
      return this.position.x === dirt.x && this.position.y === dirt.y
    })
    if(cleaingDirt){
      this.collected_dirt++;
      var dirtIndex = this.room.availableDirt().indexOf(cleaingDirt);
      this.room.availableDirt().splice(dirtIndex, 1);
    }
    return this.position;
  }

  collectedDirt() {
    return this.collected_dirt;
  }
}