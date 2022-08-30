const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => Number(item));

let numbers = [];

for (let i = 0; i < lines.length; i++) {
  if (lines[i] < 0) {
    break;
  }

  numbers.push(lines[i]);
}

const some = numbers.reduce((prevent, current) => {
  return prevent + current;
}, 0);

const arrange = (some / numbers.length).toFixed(2);

console.log(arrange);
