const { readFileSync } = require("fs");

const [number] = readFileSync("stdin", "utf-8").split("\n").map(parseFloat);

const notation = number.toExponential(4).toUpperCase();

let notationFormatter = "";

if (number > 0) {
  notationFormatter = notation.padStart(10, "+");
} else {
  notationFormatter = notation.padStart(10, "-");
}

console.log(notationFormatter);
