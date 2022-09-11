const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [operation] = lines;

const matriz = [];

let indexValue = 1;

let some = 0;

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexValue++) {
    column.push(Number(lines[indexValue]));
  }

  matriz.push(column);
}

if (operation.trim() == "S") {
  for (let line = 0; line < matriz.length; line++) {
    for (let col = 0; col < matriz[line].length; col++) {
      if (col > line) {
        const currentValue = matriz[line][col];

        some += currentValue;
      }
    }
  }

  console.log(some.toFixed(1));
}

if (operation.trim() == "M") {
  for (let line = 0; line < matriz.length; line++) {
    for (let col = 0; col < matriz[line].length; col++) {
      if (col > line) {
        const currentValue = matriz[line][col];

        some += currentValue;
      }
    }
  }

  const arrange = some / (matriz.length * matriz.length - 12) / 2;

  console.log(arrange.toFixed(1));
}
