import Input from '../src/input';

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

  it("Gets the roomba location", function() {
    var input = new Input();
    input.readFile()
    expect(input.roombaLocation()).toEqual({ x: 1, y: 2 })
  })

  it("Gets the location of dirt patches", function() {
    var input = new Input();
    input.readFile()
    expect(input.patchesOfDirt()).toEqual([{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }])
  })

  it("Get's the driving instructions", function() {
    var input = new Input();
    input.readFile()
    expect(input.drivingInstructions()).toEqual(['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W'])
  })
})
