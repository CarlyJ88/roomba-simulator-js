var Input = require('../src/input');

describe("Input", function() {
  it("Converts the file into array of strings", function() {
    var input = new Input();
    expect(input.readFile()).toEqual(["5 5", "1 2", "1 0", "2 2", "2 3", "NNESEESWNWW"])
  })

  it("Gets the room dimensions", function() {
    var input = new Input();
    input.readFile()
    expect(input.roomDimensions()).toEqual({ x: 5, y: 5 })
  })
})
