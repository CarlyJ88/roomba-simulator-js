import fs from "fs";

class Input {
  constructor() {
    this.lines = [];
  }

  readFile() {
    const text = fs.readFileSync('input.txt').toString();
    this.lines = text.split("\n");
    return this.lines;
  }

  roomDimensions() {
    const array = this.lines[0].split(" ").map((line) => {
      return parseInt(line);
    })
    return { x: array[0], y: array[1] }
  }

  roombaLocation() {
    const array = this.lines[1].split(" ").map((line) => {
      return parseInt(line);
    })
    return { x: array[0], y: array[1] }
  }

  patchesOfDirt() {
    let array;
    const dirt_lines = this.lines.slice(2, -1).map((line) => {
      array = line.split(" ").map((line) => {
        return parseInt(line);
      })
      return { x: array[0], y: array[1] }
    })
    return dirt_lines;
  }

  drivingInstructions() {
    return this.lines.slice(-1)[0].split("")
  }
}

export default Input;
