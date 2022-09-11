const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberColumn, operation] = lines;

const matriz = [];

let some = 0;
let indexValue = 2;

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexValue++) {
    column.push(Number(lines[indexValue]));
  }

  matriz.push(column);
}

if (operation.trim() == "S") {
  for (let i = 0; i <= 11; i++) {
    let currentColumn = matriz[i][Number(numberColumn)];

    some += currentColumn;
  }

  console.log(some.toFixed(1));
}

if (operation.trim() == "M") {
  for (let i = 0; i <= 11; i++) {
    let currentColumn = matriz[i][Number(numberColumn)];

    some += currentColumn;
  }

  const arrange = some / 12;

  console.log(arrange.toFixed(1));
}
