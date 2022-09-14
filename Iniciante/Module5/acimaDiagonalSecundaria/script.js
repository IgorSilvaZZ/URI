const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

let [operation] = lines;

const matrix = [];

let indexMatrix = 1;

let some = 0;

operation = operation.trim();

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexMatrix++) {
    column.push(Number(lines[indexMatrix]));
  }

  matrix.push(column);
}

/* console.log(`Linha 0 Coluna 10 => ${matrix[10][0]}`);
console.log(`Linha 0 Coluna 9 => ${matrix[9][0]}`);
console.log(`Linha 0 Coluna 8 => ${matrix[8][0]}`);
console.log(`Linha 0 Coluna 7 => ${matrix[7][0]}`);

console.log("===========================================");

console.log(`Linha ${line} Coluna ${col} => ${matrix[line][col]}`);

console.log(); */

let countColumn = 10;

for (let line = 0; line <= 11; line++) {
  for (let col = countColumn; col >= 0; col--) {
    some += matrix[line][col];
  }

  countColumn--;
}

if (operation === "S") {
  console.log(some.toFixed(1));
}

if (operation == "M") {
  some /= (matrix.length * matrix.length - 2) / 2;

  console.log(some.toFixed(1));
}
