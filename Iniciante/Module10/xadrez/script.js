const { readFileSync } = require("fs");

const [line, column] = readFileSync("stdin", "utf-8").split("\n").map(Number);

const matrix = [];

for (let l = 1; l <= line; l++) {
  const col = [];

  for (let c = 1; c <= column; c++) {
    if (l % 2 === 1 && c % 2 === 1) {
      col.push(1);
    } else if (l % 2 == 0 && c % 2 === 1) {
      col.push(0);
    } else {
      col.push(1);
    }
  }

  matrix.push(col);
}

console.log(matrix[line - 1][column - 1]);

// console.log(matrix[line][column]);
