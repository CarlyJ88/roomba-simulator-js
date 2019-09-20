import Room from "./room";
import Roomba from "./roomba";
import Input from "./input";

function controller() {
  var input = new Input()
  input.readFile()
  var dimensions = input.roomDimensions()
  var room = new Room(dimensions)
  input.patchesOfDirt().forEach((dirt) => {
    room.addDirt(dirt)
  })
  var position = input.roombaLocation()
  var roomba = new Roomba(position, room)
  input.drivingInstructions().forEach((direction) => {
        roomba.move(direction)
  })
  console.log(`${roomba.currentPosition().x} ${roomba.currentPosition().y}`)
  console.log(roomba.collectedDirt())
}

controller();
