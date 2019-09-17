var Room = require('../src/room')
var Roomba = require('../src/roomba');


describe("Roomba", function() {

  beforeEach(function () {
    room = new Room({x: 5, y: 5});
    
  })

  describe("Roomba directions", function() {
    it("knows it's location", function() {
      var roomba = new Roomba({x: 0, y: 0}, room)
      expect(roomba.currentPosition()).toEqual({x: 0, y: 0})
    })
  
    it("moves North by 1", function() {
      var roomba = new Roomba({x: 0, y: 0}, room)
      expect(roomba.move('N')).toEqual({x: 0, y: 1})
    })
  
    it("moves East by 1", function() {
      var roomba = new Roomba({x: 0, y: 0}, room)
      expect(roomba.move('E')).toEqual({x: 1, y: 0})
    })
  
    it("moves South by 1", function() {
      var roomba = new Roomba({x: 5, y: 5}, room)
      expect(roomba.move('S')).toEqual({x: 5, y: 4})
    })
  
    it("moves West by 1", function() {
      var roomba = new Roomba({x: 5, y: 5}, room)
      expect(roomba.move('W')).toEqual({x: 4, y: 5})
    })
  })

  describe("Roomba invalid moves", function() {
    it("cannot move South if next to the wall", function() {
      var roomba = new Roomba({ x: 0, y: 0 }, room)
      expect(roomba.move('S')).toEqual({ x: 0, y: 0 })
    })
  
    it("cannot move West if next to the wall", function() {
      var roomba = new Roomba({ x: 0, y: 0 }, room)
      expect(roomba.move('W')).toEqual({ x: 0, y: 0 })
    })
  
    it("cannot move East if next to the wall", function() {
      var roomba = new Roomba({ x: 5, y: 5 }, room)
      expect(roomba.move('E')).toEqual({ x: 5, y: 5 })
    })
  
    it("cannot move North if next to the wall", function() {
      var roomba = new Roomba({ x: 5, y: 5 }, room)
      expect(roomba.move('N')).toEqual({ x: 5, y: 5 })
    })
  })

  describe("Collected dirt", function() {
    it("Cleans one patch of available dirt", function() {
      var roomba = new Roomba({ x: 0, y: 0 }, room)
      room.addDirt({ x: 0, y: 1 })
      roomba.move('N')
      expect(roomba.collectedDirt()).toEqual(1)
    })
  
    it("Cleans two patches of available dirt", function() {
      var roomba = new Roomba({ x: 0, y: 0 }, room)
      room.addDirt({ x: 0, y: 1 })
      room.addDirt({ x: 1, y: 1 })
      roomba.move('N')
      roomba.move('E')
      expect(roomba.collectedDirt()).toEqual(2)
    })

    it("Cleans one patch of available dirt that it meets even if two are available", function() {
      var roomba = new Roomba({ x: 0, y: 0 }, room)
      room.addDirt({ x: 0, y: 1 })
      room.addDirt({ x: 1, y: 1 })
      roomba.move('N')
      roomba.move('S')
      expect(roomba.collectedDirt()).toEqual(1)
    })

    it("Cleans one patch of available dirt even when it hoovers over the same spot that was previously dirty", function() {
      roomba = new Roomba({ x: 0, y: 0 }, room)
      room.addDirt({ x: 0, y: 1 })
      room.addDirt({ x: 1, y: 1 })
      roomba.move('N')
      roomba.move('S')
      roomba.move('N')
      expect(roomba.collectedDirt()).toEqual(1)
    })
  })
})