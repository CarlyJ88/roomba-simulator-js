describe("Roomba", function() {
  it("knows it's location", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({x: 0, y: 0}, room)
    expect(roomba.currentPosition()).toEqual({x: 0, y: 0})
  })

  it("moves North by 1", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({x: 0, y: 0}, room)
    expect(roomba.move('N')).toEqual({x: 0, y: 1})
  })

  it("moves East by 1", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({x: 0, y: 0}, room)
    expect(roomba.move('E')).toEqual({x: 1, y: 0})
  })

  it("moves South by 1", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({x: 5, y: 5}, room)
    expect(roomba.move('S')).toEqual({x: 5, y: 4})
  })

  it("moves West by 1", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({x: 5, y: 5}, room)
    expect(roomba.move('W')).toEqual({x: 4, y: 5})
  })

  it("cannot move South if next to the wall", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({ x: 0, y: 0 }, room)
    expect(roomba.move('S')).toEqual({ x: 0, y: 0 })
  })

  it("cannot move West if next to the wall", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({ x: 0, y: 0 }, room)
    expect(roomba.move('W')).toEqual({ x: 0, y: 0 })
  })

  it("cannot move East if next to the wall", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({ x: 5, y: 5 }, room)
    expect(roomba.move('E')).toEqual({ x: 5, y: 5 })
  })

  it("cannot move North if next to the wall", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({ x: 5, y: 5 }, room)
    expect(roomba.move('N')).toEqual({ x: 5, y: 5 })
  })

})