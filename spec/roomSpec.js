describe("Room", function() {

  it("has a small room", function() {
    var room = new Room({x: 5, y: 5});
    expect(room.dimensions()).toEqual({x: 5, y: 5})
  })
})