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
    // console.log(typeof this.lines[0])
    const array = this.lines[0].split(" ").map((line) => {
      console.log(parseInt(line));
      return parseInt(line);
    })
    return { x: array[0], y: array[1] }
  }
}
