const { readFileSync } = require("fs");

const lines = readFileSync("stdin", "utf-8").split("\n").map(Number);

let indexMatrix = 0;

while (true) {
  const matrix = [];

  let currentNumber = lines[indexMatrix];

  if (currentNumber === 0) {
    break;
  }

  for (let line = 0; line < currentNumber; line++) {
    const column = [];

    for (let col = 0; col < currentNumber; col++) {
      // Distancia entre as linhas
      let distanceLine = 0;

      // Distancia entre as colunas
      let distanceColumn = 0;

      let distance = 0;

      if (line < currentNumber - line - 1) {
        distanceLine = line;
      } else {
        distanceLine = currentNumber - line - 1;
      }

      if (col < currentNumber - col - 1) {
        distanceColumn = col;
      } else {
        distanceColumn = currentNumber - col - 1;
      }

      // Pegando a menor distancia para apresentar
      if (distanceColumn < distanceLine) {
        distance = distanceColumn;
      } else {
        distance = distanceLine;
      }

      column.push(distance + 1);
    }

    matrix.push(String(column).padStart(3, " "));
  }

  console.log(matrix);

  indexMatrix++;
}
