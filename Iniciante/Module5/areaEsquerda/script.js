const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [operation] = lines;

operation = operation.trim();

const matrix = [];

let indexMatrix = 1;
let some = 0;
let totalElements = 0;

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexMatrix++) {
    column.push(Number(lines[indexMatrix]));
  }

  matrix.push(column);
}

for (let line = 0; line <= 11; line++) {
  for (let col = 0; col <= 11; col++) {
    if (line > col && col < matrix.length - line - 1) {
      some += matrix[line][col];
      totalElements++;
    }
  }
}

if (operation == "S") {
  console.log(some.toFixed(1));
}

if (operation == "M") {
  some /= totalElements;

  console.log(some.toFixed(1));
}
