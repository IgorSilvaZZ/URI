const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [operation] = lines;

operation = operation.trim();

const matrix = [];

let indexLine = 1;

let some = 0;

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexLine++) {
    column.push(Number(lines[indexLine]));
  }

  matrix.push(column);
}

for (let line = 0; line <= 11; line++) {
  for (let col = 0; col <= 11; col++) {
    if (col > line) {
      some += matrix[line][col];
    }
  }
}

if (operation == "S") {
  console.log(some.toFixed(1));
}

if (operation == "M") {
  some /= (matrix.length * matrix.length - 12) / 2;

  console.log(some.toFixed(1));
}
