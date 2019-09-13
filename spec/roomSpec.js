describe("Room", function() {

  it("has a small room", function() {
    var room = new Room({x: 5, y: 5});
    expect(room.dimensions()).toEqual({x: 5, y: 5})
  })

  it("has a patch of dirt", function() {
    var room = new Room({x: 5, y: 5});
    expect(room.addDirt({x: 1, y: 3})).toEqual([{x: 1, y: 3}])
  })

  it("has two patches of dirt", function() {
    var room = new Room({x: 5, y: 5});
    room.addDirt({x: 3, y: 5})
    expect(room.addDirt({x: 1, y: 3})).toEqual([{x: 3, y: 5}, {x: 1, y: 3}])
  })
})