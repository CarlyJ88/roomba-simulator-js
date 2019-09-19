var Room = require("./room");
var Roomba = require("./roomba");
var Input = require("./input");

function controller() {
  input = new Input()
  input.readFile()
  dimensions = input.roomDimensions()
  room = new Room(dimensions)
  input.patchesOfDirt().forEach((dirt) => {
    room.addDirt(dirt)
  })
  position = input.roombaLocation()
  roomba = new Roomba(position, room)
  input.drivingInstructions().forEach((direction) => {
        roomba.move(direction)
  })
  console.log(`${roomba.currentPosition().x} ${roomba.currentPosition().y}`)
  console.log(roomba.collectedDirt())
}

// controller
controller();
