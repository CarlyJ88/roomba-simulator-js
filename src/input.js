// debugger;
var fs = require("fs");

module.exports= class Input {
  constructor() {
    this.lines = [];
  }

  readFile() {
    const text = fs.readFileSync('input.txt').toString();
    const textByLine = text.split("\n");
    return textByLine;
  }
}
