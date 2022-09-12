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

/* console.log("VALORES REAIS: ");
console.log("Linha 1 Coluna 0", matrix[1][0]);
console.log("Linha 2 Coluna 0", matrix[2][0]);
console.log("Linha 2 Coluna 1", matrix[2][1]);
console.log("Linha 3 Coluna 0", matrix[3][0]);
console.log("Linha 3 Coluna 1", matrix[3][1]);
console.log("Linha 3 Coluna 2", matrix[3][2]);
console.log("==================================");
console.log(); */

for (let line = 0; line <= 11; line++) {
  for (let col = 0; col <= 11; col++) {
    if (line > col) {
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
