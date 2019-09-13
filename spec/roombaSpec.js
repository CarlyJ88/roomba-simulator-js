describe("Roomba", function() {
  it("knows it's location", function() {
    room = new Room({x: 5, y: 5})
    roomba = new Roomba({x: 0, y: 0}, room)
    expect(roomba.currentPosition()).toEqual({x: 0, y: 0})
  })
})