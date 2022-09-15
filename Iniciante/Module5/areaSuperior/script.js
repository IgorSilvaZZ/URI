const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [operation] = lines;

operation = operation.trim();

let indexMatrix = 1;
let some = 0;

const matrix = [];

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexMatrix++) {
    column.push(Number(lines[indexMatrix]));
  }

  matrix.push(column);
}

let lineMin = 1;
let lineMax = 10;
let totalGreen = 0;

for (let line = 0; line <= 11; line++) {
  for (let col = 0; col <= 11; col++) {
    if (col >= lineMin && col <= lineMax) {
      some += matrix[line][col];
      totalGreen++;
    }
  }

  lineMin++;
  lineMax--;
}

if (operation == "S") {
  console.log(some.toFixed(1));
}

if (operation == "M") {
  some /= totalGreen;

  console.log(some.toFixed(1));
}
