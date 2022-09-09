const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n");

const [numberLine, operation] = lines;

const matriz = [];

let indexValue = 2;

let some = 0;

for (let line = 0; line <= 11; line++) {
  const column = [];

  for (let col = 0; col <= 11; col++, indexValue++) {
    column.push(Number(lines[indexValue]));
  }

  matriz.push(column);
}

let columnWrite = matriz[Number(numberLine)];

if (operation.trim() == "M") {
  for (let i = 0; i <= 11; i++) {
    some += columnWrite[i];
  }

  const arrange = some / columnWrite.length;

  console.log(arrange.toFixed(1));
}
if (operation.trim() == "S") {
  for (let i = 0; i <= 11; i++) {
    some += columnWrite[i];
  }

  console.log(some.toFixed(1));
}
