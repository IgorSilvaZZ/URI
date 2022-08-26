const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8")
  .split("\n")
  .map((item) => parseInt(item));

let index = 0;
let currentNumber = lines[index];
let linesNumbers = [];

while (currentNumber !== 0) {
  let line = [];

  for (let i = 1; i <= currentNumber; i++) {
    line.push(i);
  }

  linesNumbers.push(line.join(" "));

  index++;
  currentNumber = lines[index];
}

linesNumbers.forEach((item) => {
  console.log(item);
});
