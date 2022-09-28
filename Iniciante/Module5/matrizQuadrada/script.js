const { readFileSync } = require("fs");

const lines = readFileSync("/dev/stdin", "utf-8").split("\n").map(Number);

let indexMatrix = 0;

while (true) {
  let currentNumber = lines[indexMatrix];

  if (currentNumber === 0) {
    break;
  }

  for (let line = 0; line < currentNumber; line++) {
    let message = "";
    let end = "";

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

      message += `  ${distance + 1}${end}`;

      if (col != currentNumber - 1) {
        end = " ";
      }
    }

    console.log(message);

    console.log();
  }

  console.log();

  indexMatrix++;
}
