const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [operation] = lines;

operation = operation.trim();

let indexMatrix = 1;

const matrix = [];

let some = 0;

let colMin = 1;
let colMax = 10;
let totalGreen = 0;

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexMatrix++) {
    column.push(Number(lines[indexMatrix]));
  }

  matrix.push(column);
}

for (let line = 11; line >= 0; line--) {
  for (let col = 0; col <= 11; col++) {
    if (col >= colMin && col <= colMax) {
      some += matrix[line][col];
      totalGreen++;
    }
  }

  colMin++;
  colMax--;
}

if (operation == "S") {
  console.log(some.toFixed(1));
}

if (operation == "M") {
  some /= totalGreen;

  console.log(some.toFixed(1));
}
