// debugger;
var fs = require("fs");

module.exports= class Input {
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
}
